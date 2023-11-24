package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Handbook.Handbook;
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
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class UserController extends Controller {

    private UserOperations userOperations;
    public UserController(){
        this.userOperations = new UserOperations(this.createClient());
    }

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        return this.userOperations.createUser(user).toJson();
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        return this.userOperations.login(user.getUsername(), user.getPassword()).toJson();
    }

    @PostMapping("/editUser")
    public String editUser(@RequestBody User user, @RequestParam(name = "id") String id) {
        return this.userOperations.editUser(user, id).toJson();
    }

    @PostMapping("/editUserRole")
    public String editUserRole(@RequestParam(name = "id") String id, @RequestParam(name = "role") String role) {
        return this.userOperations.editUserRole(id, role).toJson();
    }


    @PostMapping("/deleteUser")
    public String deleteUser(@RequestParam(name = "id") String id){
        this.userOperations.deleteUser(id);
        return "User deleted successfully!";
    }

    @PostMapping("/getUser")
    public String getUser(@RequestParam(name = "id") String id) {
        return this.userOperations.getUser(id).toJson();
    }

    @GetMapping("/getAllUsers")
    public List<String> getAllUsers() {
        return this.userOperations.getAllUsers();
    }

}
