package com.p3.gruppe4.Models.Users;

import ch.qos.logback.classic.encoder.JsonEncoder;
import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class UserAuth extends User {

    private static final String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/";

    public UserAuth(String username, String password, String role) {

        super(username, hashPassword(password), role);
    }

    public static String hashPassword(String password) {
        return Integer.toString(password.hashCode());
    }


    public void createUser(String username, String password, String role, String email, String phonenumber, String lastname) {
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            collection.insertOne(new Document().append("username", username)
                    .append("password", hashPassword(password))
                    .append("role", role == null ? "NormalUser" : role)
                    .append("email", email)
                    .append("phonenumber", phonenumber)
                    .append("lastname", lastname)
            );
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
    }

    public void editUser(String username, String password, String role, String email, String phonenumber, String lastname) {
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            collection.updateOne(new Document().append("username", username),
                    new Document("$set", new Document()
                            .append("password", hashPassword(password))
                            .append("role", role == null ? "NormalUser" : role)
                            .append("email", email)
                            .append("phonenumber", phonenumber)
                            .append("lastname", lastname)
                    ));
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
    }

    public void deleteUser(String username) {
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            collection.deleteOne(new Document().append("username", username));
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
    }
    public boolean validateUser(String username, String password) {
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");

            Document foundUser = collection.find(new Document("username", username)).first();
            if (foundUser != null) {
                String storedPasswordHash = foundUser.getString("password");
                return storedPasswordHash.equals(hashPassword(password));
            }
            return false;
        } catch (MongoException me) {
            System.err.println("Error during user validation: " + me);
            return false;
        }
    }

}