package com.p3.gruppe4.Models.Users;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class Admin extends User {

    public Admin(String username, String password, String role) {
        super(username, password, role);
    }

    public void addUser(String username, String password, String role){
        String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/?retryWrites=true&w=majority";

        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");

            MongoCollection<Document> collection = db.getCollection("Users");
            collection.insertOne(new Document().append("username", username)
                    .append("password", password)
                    .append("role", role)
            );
            System.out.println("Success! Inserted document id: ");

            // Prints a message if any exceptions occur during the operation
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
    }

}
