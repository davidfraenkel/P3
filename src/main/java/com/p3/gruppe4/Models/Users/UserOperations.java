package com.p3.gruppe4.Models.Users;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UserOperations {

    private MongoClient mongoClient;

    // Constructor
    public UserOperations(MongoClient client) {
        this.mongoClient = client;
    }

    // Hash password method
    public static String hashPassword(String password) {
        return Integer.toString(password.hashCode());
    }

    // Create user method
    public Document createUser(User user) {
        Document returnUser = new Document();
        try {
            MongoDatabase db = this.mongoClient.getDatabase("Gastrome");
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
    public Document editUser(User user, String id) {
        Document returnUser = new Document();
        try {
            MongoDatabase db = this.mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            Document userToEdit = collection.find(new Document().append("_id", id)).first();
            if (userToEdit != null) {
                returnUser = new Document()
                        .append("_id", id)
                        .append("username", user.getUsername())
                        .append("password", hashPassword(user.getPassword()))
                        .append("role", user.getRole() == null ? "NormalUser" : user.getRole())
                        .append("email", user.getEmail())
                        .append("phonenumber", user.getPhonenumber())
                        .append("lastname", user.getLastname());
                collection.replaceOne(userToEdit, returnUser);
            } else {
                System.out.println("User not found");
            }
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnUser;
    }


    // Delete user method
    public void deleteUser(String id) {
        try {
            MongoDatabase db = this.mongoClient.getDatabase("Gastrome");
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

    // Login method ( returns user as JSON )
    public Document login(String userName, String password) {
        Document returnUser = new Document();
        try {
            MongoDatabase db = this.mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            Document user = collection.find(new Document().append("username", userName)).first();
            if (user != null) {
                if (user.getString("password").equals(hashPassword(password))) {
                    returnUser = user;
                } else {
                    System.out.println("Wrong password");
                }
            } else {
                System.out.println("User not found");
            }
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnUser;
    }

    public Document editUserRole(String id, String role) {
        Document returnUser = new Document();
        try {
            MongoDatabase db = this.mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            Document user = collection.find(new Document().append("_id", id)).first();
            if (user != null) {
                returnUser = new Document()
                        .append("_id", id)
                        .append("username", user.getString("username"))
                        .append("password", user.getString("password"))
                        .append("role", role)
                        .append("email", user.getString("email"))
                        .append("phonenumber", user.getString("phonenumber"))
                        .append("lastname", user.getString("lastname"));
                collection.replaceOne(user, returnUser);
            } else {
                System.out.println("User not found");
            }
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnUser;
    }

    public List<String> getAllUsers() {
        List<String> userRoles = new ArrayList<>();
        try {
            MongoDatabase db = this.mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");

            collection.find().forEach(doc -> {
                Map<String, String> userRoleMap = new HashMap<>();
                userRoleMap.put("username", doc.toJson());
                userRoleMap.put("lastname", doc.toJson());
                userRoleMap.put("role", doc.toJson());
                userRoleMap.put("email", doc.toJson());
                userRoleMap.put("id", doc.toJson());
                userRoles.add(doc.toJson());
            });
            System.out.println("Retrieved users: " + userRoles);
        } catch (MongoException me) {
            System.err.println("Unable to retrieve users due to an error: " + me);
        }
        return userRoles;
    }

    public Document getUser(String id) {
        Document returnUser = new Document();
        try {
            MongoDatabase db = this.mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");
            Document user = collection.find(new Document().append("_id", id)).first();
            if (user != null) {
                returnUser = user;
            } else {
                System.out.println("User not found");
            }
        } catch (MongoException me) {
            System.err.println("Unable to insert due to an error: " + me);
        }
        return returnUser;
    }
}