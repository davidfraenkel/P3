package com.p3.gruppe4.Models.Users;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class UserOperations {

    private static final String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/";

    // Constructor
    public UserOperations() {
    }

    // Hash password method
    public static String hashPassword(String password) {
        return Integer.toString(password.hashCode());
    }

    // Create user method
    public Document createUser(User user) {
        Document returnUser = new Document();
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");

            returnUser = new Document()
                    .append("_id", user.getId().toString())
                    .append("username", user.getUsername())
                    .append("password", hashPassword(user.getPassword()))
                    .append("role", user.getRole() == null ? "NormalUser" : user.getRole())
                    .append("email", user.getEmail())
                    .append("phonenumber", user.getPhonenumber())
                    .append("lastname", user.getLastname());

            collection.insertOne(returnUser);
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnUser;
    }

    // Edit user method
    public void editUser(String username, String password, String role, String email, String phonenumber, String lastname) {
try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            Document user = collection.find(new Document().append("username", username)).first();
            if (user != null) {
                if (password != null) {
                    user.append("password", hashPassword(password));
                }
                if (role != null) {
                    user.append("role", role);
                }
                if (email != null) {
                    user.append("email", email);
                }
                if (phonenumber != null) {
                    user.append("phonenumber", phonenumber);
                }
                if (lastname != null) {
                    user.append("lastname", lastname);
                }
                collection.replaceOne(new Document().append("username", username), user);
            } else {
                System.out.println("User not found");
            }
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
    }

    // Delete user method
    public void deleteUser(String id) {
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            Document user = collection.find(new Document().append("_id", id)).first();
            if (user != null) {
                collection.deleteOne(new Document().append("_id", id));
            } else {
                System.out.println("User not found");
            }
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
    }

    // Login method
    public String login(String username, String password) {
        String returnString = "";
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            Document user = collection.find(new Document().append("username", username)).first();
            if (user != null) {
                if (user.getString("password").equals(hashPassword(password))) {
                    returnString = user.toJson();
                } else {
                    returnString = "Wrong password";
                }
            } else {
                returnString = "User not found";
            }
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnString;
    }
}
