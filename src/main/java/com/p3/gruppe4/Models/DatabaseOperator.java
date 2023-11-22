package com.p3.gruppe4.Models;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class DatabaseOperator {
    private String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/?retryWrites=true&w=majority\n";
    protected MongoDatabase database;
    public DatabaseOperator (){
        System.out.println("super");
        this.database = this.setupDatabase();
        System.out.println("Database: " + this.database);
    }

    private MongoDatabase setupDatabase(){
        try (MongoClient mongoClient = MongoClients.create(this.connectionString)) {
            return mongoClient.getDatabase("Gastrome");
            // Prints a message if any exceptions occur during the operation
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
            return null;
        }
    }

}
