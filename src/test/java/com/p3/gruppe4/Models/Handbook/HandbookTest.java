package com.p3.gruppe4.Models.Handbook;

import static com.mongodb.client.model.Filters.eq;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

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

    }


    @Test
    void getAllTopics() {
        // Create a real FindIterable and MongoCursor with the sample documents
        FindIterable<Document> realFindIterable = Mockito.mock(FindIterable.class);
        MongoCursor<Document> realCursor = Mockito.mock(MongoCursor.class);

        Mockito.when(mockCollection.find()).thenReturn(realFindIterable);
        Mockito.when(realFindIterable.iterator()).thenReturn(realCursor);

        // Simulate two documents in the cursor
        Mockito.when(realCursor.hasNext()).thenReturn(true, true, false);
        Mockito.when(realCursor.next()).thenReturn(sampleDocument1, sampleDocument2);

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
        // Create a real FindIterable and MongoCursor with the sample documents
        FindIterable<Document> realFindIterable = Mockito.mock(FindIterable.class);
        MongoCursor<Document> realCursor = Mockito.mock(MongoCursor.class);

        Mockito.when(mockCollection.find(eq("_id", this.topic1.getId().toString()))).thenReturn(realFindIterable);
        Mockito.when(realFindIterable.iterator()).thenReturn(realCursor);
        Mockito.when(realCursor.hasNext()).thenReturn(true, true, false); // Simulate two documents
        Mockito.when(realCursor.next()).thenReturn(sampleDocument1, sampleDocument2);

        Document result = this.handbook.getTopic(this.topic1.getId().toString());

        System.out.println(result);

        assertEquals(this.sampleDocument1, result);
    }

    @Test
    void createTopic() {
    }

    @Test
    void editTopic() {
    }

    @Test
    void deleteTopic() {
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
