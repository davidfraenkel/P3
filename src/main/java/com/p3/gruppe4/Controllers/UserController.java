package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Users.User;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import com.p3.gruppe4.Models.Users.UserAuth;

@RestController
@RequestMapping("/api")
public class UserController {

    @PostMapping("/signup")
    public Map<String, String> signup(@RequestBody User user) {
        UserAuth userAuth = new UserAuth(); // Assuming a "NormalUser" role
        userAuth.createUser(user);
        Map<String, String> response = new HashMap<>();
        response.put("message", "User registered successfully!");
        System.out.println("User data: " + user.getUsername() + " " + user.getRole() + " " + user.getPassword() + " " + user.getEmail() + " " + user.getPhonenumber() + " " + user.getFirstname() + " " + user.getLastname());
        return response;
    }
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        UserAuth userAuth = new UserAuth();
        boolean isUserValid = userAuth.validateUser(user.getUsername(), user.getPassword());

        Map<String, String> response = new HashMap<>();
        if (isUserValid) {
            response.put("message", "User login successful!");
        } else {
            response.put("message", "User login failed. Invalid username or password.");
        }
        return response;
    }


    @PostMapping("/editUser")
    public Map<String, String> editUser(@RequestBody User user) {
        UserAuth userAuth = new UserAuth();
        userAuth.editUser(user.getUsername(), user.getPassword(), user.getRole(), user.getEmail(), user.getPhonenumber(), user.getLastname());
        Map<String, String> response = new HashMap<>();
        response.put("message", "User edited successfully!");
        // User data changed from to
        System.out.println("User data changed from " + user.getUsername() + " " + user.getRole() + " " + user.getPassword() + " " + user.getEmail() + " " + user.getPhonenumber() + " " + user.getFirstname() + " " + user.getLastname());
        System.out.println("User data changed to " + user.getUsername() + " " + " " + user.getRole() + " " +user.getPassword() + " " + user.getEmail() + " " + user.getPhonenumber() + " " + user.getFirstname() + " " + user.getLastname());
        return response;
    }

    @PostMapping("/deleteUser")
    public Map<String, String> deleteUser(@RequestBody User user) {
        UserAuth userAuth = new UserAuth();
        userAuth.deleteUser(user.getUsername());
        Map<String, String> response = new HashMap<>();
        response.put("message", "User deleted successfully!");
        System.out.println("User deleted: " + user.getUsername() + " " + user.getRole());
        return response;
    }

}
