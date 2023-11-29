package com.p3.gruppe4.Models.Handbook;

import static com.mongodb.client.model.Filters.eq;
import static org.junit.jupiter.api.Assertions.*;

import com.mongodb.client.model.Filters;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.InsertOneResult;
import com.mongodb.client.result.UpdateResult;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

import org.bson.Document;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.FindIterable;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

public class HandbookTest {
    private Handbook handbook;
    private MongoClient mockClient;
    private MongoDatabase mockDatabase;
    private MongoCollection<Document> mockCollection;
    private FindIterable<Document> mockFindIterable;
    private MongoCursor<Document> mockCursor;

    private Topic topic1;
    private Topic topic2;
    private Document sampleDocument1;
    private Document sampleDocument2;


    @BeforeEach
    public void setUp() {
        this.mockClient = Mockito.mock(MongoClient.class);
        this.mockDatabase = Mockito.mock(MongoDatabase.class);
        this.mockCollection = Mockito.mock(MongoCollection.class);
        this.handbook = new Handbook(mockClient);

        Mockito.when(mockClient.getDatabase("Gastrome")).thenReturn(mockDatabase);
        Mockito.when(mockDatabase.getCollection("Topic")).thenReturn(mockCollection);

        // Create sample documents
        this.topic1 = new Topic("Document 1", "path 1");
        this.topic2 = new Topic("Document 2", "path 2");

        this.sampleDocument1 = new Document()
                .append("_id", topic1.getId().toString())
                .append("name", topic1.getName())
                .append("imagePath", topic1.getImagePath());
        this.sampleDocument2 = new Document()
                .append("_id", topic2.getId().toString())
                .append("name", topic2.getName())
                .append("imagePath", topic2.getImagePath());

        // Create a real FindIterable and MongoCursor with the sample documents
        this.mockFindIterable = Mockito.mock(FindIterable.class);
        this.mockCursor = Mockito.mock(MongoCursor.class);
    }


    @Test
    void getAllTopics() {
        Mockito.when(mockCollection.find()).thenReturn(mockFindIterable);
        Mockito.when(mockFindIterable.iterator()).thenReturn(mockCursor);

        // Simulate two documents in the cursor
        Mockito.when(mockCursor.hasNext()).thenReturn(true, true, false);
        Mockito.when(mockCursor.next()).thenReturn(sampleDocument1, sampleDocument2);

        // Call the method under test
        HashSet<Document> result = handbook.getAllTopics();

        // Verify the expected behavior
        assertEquals(2, result.size()); // Check that the result set has 2 documents

        // Verify that the MongoDB client is properly closed
        mockClient.close();
        Mockito.verify(mockClient).close();
    }

    @Test
    void getTopic() {
        Mockito.when(mockCollection.find(Filters.eq("_id", this.sampleDocument1.get("_id")))).thenReturn(mockFindIterable);
        Mockito.when(mockFindIterable.iterator()).thenReturn(mockCursor);
        Mockito.when(mockCursor.hasNext()).thenReturn(true, true, false); // Simulate two documents
        Mockito.when(mockCursor.next()).thenReturn(sampleDocument1, sampleDocument2);
        Mockito.when(mockCollection.find(Filters.eq("_id", this.sampleDocument1.get("_id"))).first()).thenReturn(sampleDocument1);

        Document result = this.handbook.getTopic(this.topic1.getId().toString());

        assertEquals(this.sampleDocument1, result);
    }

    @Test
    void createTopic() {
        InsertOneResult insertOneResult = Mockito.mock(InsertOneResult.class);

        MockMultipartFile file
                = new MockMultipartFile(
                "file",
                "test.txt",
                MediaType.TEXT_PLAIN_VALUE,
                "Hello, World!".getBytes()
        );

        Mockito.when(mockCollection.insertOne(sampleDocument1)).thenReturn(insertOneResult);

        Handbook handbookSpy = Mockito.spy(handbook);
        Mockito.doNothing().when(handbookSpy.saveFile).store(Mockito.any(MultipartFile.class));

        Document result = handbookSpy.createTopic(topic1, file);

        Document expected = new Document()
                .append("_id", sampleDocument1.get("_id"))
                .append("name", sampleDocument1.get("name"))
                .append("imagePath", file.getOriginalFilename())
                ;

        assertEquals(result, expected);
    }

    @Test
    void editTopic() {
        UpdateResult updateResult = Mockito.mock(UpdateResult.class);

        Topic expectedTopic = new Topic("name of topic", "image path of topic");
        Document updates = new Document()
                .append("name", expectedTopic.getName())
                .append("imagePath", expectedTopic.getImagePath());

        Document expectedResult = new Document("$set", updates);

        Mockito.when(mockCollection.find(Filters.eq("_id", this.sampleDocument1.get("_id")))).thenReturn(mockFindIterable);
        Mockito.when(mockFindIterable.iterator()).thenReturn(mockCursor);
        Mockito.when(mockCursor.hasNext()).thenReturn(true, true, false); // Simulate two documents
        Mockito.when(mockCursor.next()).thenReturn(sampleDocument1, sampleDocument2);
        Mockito.when(mockCollection.find(Filters.eq("_id", this.sampleDocument1.get("_id"))).first()).thenReturn(sampleDocument1);
        Mockito.when(mockCollection.updateOne(new Document().append("_id",  topic1.getId().toString()), updates)).thenReturn(updateResult);

        Document actualResult = this.handbook.editTopic(this.topic1.getId().toString(), expectedTopic);
        assertEquals(expectedResult, actualResult);
    }

    @Test
    void deleteTopic() {
        DeleteResult deleteResult = Mockito.mock(DeleteResult.class);

        Mockito.when(mockCollection.deleteOne(new Document().append("_id",  topic1.getId().toString()))).thenReturn(deleteResult);
        Mockito.when(deleteResult.getDeletedCount()).thenReturn(1L);

        long result = this.handbook.deleteTopic(topic1.getId().toString());

        assertEquals(1, result);
    }

    @Test
    void getAllSubTopics() {
    }

    @Test
    void getSubTopic() {
    }

    @Test
    void createSubTopic() {
    }

    @Test
    void editSubTopic() {
    }

    @Test
    void deleteSubTopic() {
    }
}
