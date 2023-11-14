package com.p3.gruppe4.Models.Users;

import ch.qos.logback.classic.encoder.JsonEncoder;
import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
public class UserAuth extends User {

    String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/?retryWrites=true&w=majority\n";
    private static final JsonEncoder passwordEncoder = new JsonEncoder();

    public UserAuth(String username, String password, String role) {
        super(username, password, role);
    }
    public void createUser(String username, String password, String baseRole, String email, String phonenumber, String firstname, String lastname) {
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            collection.insertOne(new Document().append("username", username)
                    .append("password", passwordEncoder)
                    .append("role", "baseRole")
                    .append("email", email)
                    .append("phonenumber", phonenumber)
                    .append("firstname", firstname)
                    .append("lastname", lastname)
            );
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
    }
}
