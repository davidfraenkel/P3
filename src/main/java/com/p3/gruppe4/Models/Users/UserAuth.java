package com.p3.gruppe4.Models.Users;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
public class UserAuth {

    private static final String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/";
    private static final String passwordEncoder = "passwordEncoder";

    public void createUser(User user) {
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            collection.insertOne(new Document()
                    .append("_id", user.getId().toString())
                    .append("username", user.getUsername())
                    .append("password", passwordEncoder)
                    .append("role", "baseRole")
                    .append("email", user.getEmail())
                    .append("phonenumber", user.getPhonenumber())
                    .append("firstname", user.getFirstname())
                    .append("lastname", user.getLastname())
            );
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
    }
}
