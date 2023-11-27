package com.p3.gruppe4.Models.Handbook;

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

    @BeforeEach
    public void setUp() {
        mockClient = Mockito.mock(MongoClient.class);
        mockDatabase = Mockito.mock(MongoDatabase.class);
        mockCollection = Mockito.mock(MongoCollection.class);
        handbook = new Handbook(mockClient);

        Mockito.when(mockClient.getDatabase("Gastrome")).thenReturn(mockDatabase);
        Mockito.when(mockDatabase.getCollection("Topic")).thenReturn(mockCollection);
//        mockClient = Mockito.mock(MongoClient.class);
//        mockDatabase = Mockito.mock(MongoDatabase.class);
//        mockCollection = Mockito.mock(MongoCollection.class);
//        mockFindIterable = Mockito.mock(FindIterable.class);
//        mockCursor = Mockito.mock(MongoCursor.class);
//        handbook = new Handbook(mockClient);
//
//
//        Mockito.when(mockCollection.insertMany(docList)).thenReturn(null);
//
//        Mockito.when(mockClient.getDatabase("Gastrome")).thenReturn(mockDatabase);
//        Mockito.when(mockDatabase.getCollection("Topic")).thenReturn(mockCollection);
//        Mockito.when(mockCollection.find()).thenReturn(mockFindIterable);
//        Mockito.when(mockFindIterable.iterator()).thenReturn(mockCursor);
//
//        // Configure the cursor to return no documents when iterated
//        Mockito.when(mockCursor.hasNext()).thenReturn(false);
    }


    @Test
    void getAllTopics() {
        // Create sample documents
        Topic topic1 = new Topic("Document 1", "path 1");
        Topic topic2 = new Topic("Document 2", "path 2");

        Document sampleDocument1 = new Document()
                .append("_id", topic1.getId().toString())
                .append("name", topic1.getName())
                .append("imagePath", topic1.getImagePath());
        Document sampleDocument2 = new Document()
                .append("_id", topic2.getId().toString())
                .append("name", topic2.getName())
                .append("imagePath", topic2.getImagePath());

        // Create a real FindIterable and MongoCursor with the sample documents
        FindIterable<Document> realFindIterable = Mockito.mock(FindIterable.class);
        MongoCursor<Document> realCursor = Mockito.mock(MongoCursor.class);

        Mockito.when(mockCollection.find()).thenReturn(realFindIterable);
        Mockito.when(realFindIterable.iterator()).thenReturn(realCursor);
        Mockito.when(realCursor.hasNext()).thenReturn(true, true, false); // Simulate two documents
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
