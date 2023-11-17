package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Users.User;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import com.p3.gruppe4.Models.Users.UserOperations;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.MongoException;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.bson.Document;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class UserController {

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        UserOperations userAuth = new UserOperations(); // Assuming a "NormalUser" role
        return userAuth.createUser(user).toJson();
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        UserOperations userAuth = new UserOperations();
        return userAuth.login(user.getUsername(), user.getPassword());
    }


    @PostMapping("/editUser")
    public String editUser(@RequestBody User user) {
        UserOperations userAuth = new UserOperations();
        userAuth.editUser(user.getUsername(), user.getPassword(), user.getRole(), user.getEmail(), user.getPhonenumber(), user.getLastname());
        return "User edited successfully!";
    }

    @PostMapping("/deleteUser")
    public String deleteUser(@RequestParam(name = "id") String id){
        UserOperations userAuth = new UserOperations();
        userAuth.deleteUser(id);
        return "User deleted successfully!";
    }

    @GetMapping("/getAllUsers")
    public List<String> getAllUsers() {
        List<String> userRoles = new ArrayList<>();
        String connectionString = "mongodb+srv://pepperonis:ilovepepperonis321@p3gastrome.as1pjv9.mongodb.net/";
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            MongoDatabase db = mongoClient.getDatabase("Gastrome");
            MongoCollection<Document> collection = db.getCollection("Users");

            collection.find().forEach(doc -> userRoles.add("User: " + doc.getString("username") + ", Role: " + doc.getString("role")));
        } catch (MongoException me) {
            System.err.println("Unable to retrieve users due to an error: " + me);
        }
        return userRoles;
    }

}
