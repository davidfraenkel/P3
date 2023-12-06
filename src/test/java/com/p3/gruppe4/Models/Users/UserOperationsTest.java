package com.p3.gruppe4.Models.Users;

import static org.junit.jupiter.api.Assertions.*;

import com.p3.gruppe4.Models.Users.User;
import com.p3.gruppe4.Models.Users.UserOperations;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.ArgumentCaptor;


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

class UserOperationsTest {

    private User user;
    private MongoClient mockClient;
    private MongoDatabase mockDatabase;
    private MongoCollection<Document> mockCollection;
    private FindIterable<Document> mockFindIterable;
    private MongoCursor<Document> mockCursor;


    @BeforeEach
    void setUp() {
        mockClient = Mockito.mock(MongoClient.class);
        mockDatabase = Mockito.mock(MongoDatabase.class);
        mockCollection = Mockito.mock(MongoCollection.class);
        user = new User("username", "lastname", "email", "phonenumber", "password", "confirmpassword", "role");

        Mockito.when(mockClient.getDatabase("Gastrome")).thenReturn(mockDatabase);
        Mockito.when(mockDatabase.getCollection("Users")).thenReturn(mockCollection);
    }

    @Test
    void hashPassword() {
        String password = "TestPassword";
        String hashedPassword = UserOperations.hashPassword(password);
        String expectedHash = Integer.toString(password.hashCode());

        System.out.println("Original Password: " + password);
        System.out.println("Hashed Password: " + hashedPassword);
        System.out.println("Expected Hash: " + expectedHash);

        assertEquals(expectedHash, hashedPassword, "The hashed password should match the expected hash value.");
    }

    @Test
    void createUser() {
        // Arrange
        User testUser = new User("username", "lastname", "email", "phonenumber", "phonenumber", "confirmpassword", "role");
        UserOperations userOperations = new UserOperations(mockClient);

        // Act
        Document createdUser = userOperations.createUser(testUser);

        // Assert
        assertNotNull(createdUser, "The returned Document should not be null");
        assertEquals(testUser.getUsername(), createdUser.getString("username"), "Username should match");
        assertEquals(UserOperations.hashPassword(testUser.getPassword()), createdUser.getString("password"), "Password should be hashed correctly");
        // ... more assertions for other fields ...

        // Verify that insertOne was called with the captured document
        ArgumentCaptor<Document> documentCaptor = ArgumentCaptor.forClass(Document.class);
        Mockito.verify(mockCollection).insertOne(documentCaptor.capture());
        Document capturedDocument = documentCaptor.getValue();
        assertEquals(createdUser, capturedDocument, "The document written to DB should match the returned document");
    }



    @Test
    void editUser() {

    }

    @Test
    void deleteUser() {
    }

    @Test
    void login() {
    }

    @Test
    void editUserRole() {
    }

    @Test
    void getAllUsers() {
    }

    @Test
    void getUser() {
    }
}