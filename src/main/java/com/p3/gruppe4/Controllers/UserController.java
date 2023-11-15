package com.p3.gruppe4.Controllers;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import com.p3.gruppe4.Models.Users.UserAuth;

@RestController
@RequestMapping("/api")
public class UserController {

    @PostMapping("/signup")
    public Map<String, String> signup(@RequestBody User user) {
        UserAuth userAuth = new UserAuth(user.getUsername(), user.getPassword(), user.getRole()); // Assuming a "NormalUser" role
        userAuth.createUser(user.getUsername(), user.getPassword(), "NormalUser", user.getEmail(), user.getPhonenumber(), user.getLastname());
        Map<String, String> response = new HashMap<>();
        response.put("message", "User registered successfully!");
        System.out.println("User data: " + user.getUsername() + " " + user.getRole() + " " + user.getPassword() + " " + user.getEmail() + " " + user.getPhonenumber() + " " + user.getFirstname() + " " + user.getLastname());
        return response;
    }
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User user) {
        UserAuth userAuth = new UserAuth(user.getUsername(), user.getPassword(), user.getRole());
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
        UserAuth userAuth = new UserAuth(user.getUsername(), user.getPassword(), user.getRole());
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
        UserAuth userAuth = new UserAuth(user.getUsername(), user.getPassword(), user.getRole());
        userAuth.deleteUser(user.getUsername());
        Map<String, String> response = new HashMap<>();
        response.put("message", "User deleted successfully!");
        System.out.println("User deleted: " + user.getUsername() + " " + user.getRole());
        return response;
    }

    public static class User {
        private String username, firstname, lastname, email, phonenumber, password, confirmpassword, role;

        // Getters and setters on one line each

        public String getUsername() { return username; }
        public void setUsername(String username) { this.username = username; }

        public String getFirstname() { return firstname; }
        public void setFirstname(String firstname) { this.firstname = firstname; }

        public String getLastname() { return lastname; }
        public void setLastname(String lastname) { this.lastname = lastname; }
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getPhonenumber() { return phonenumber; }
        public void setPhonenumber(String phonenumber) { this.phonenumber = phonenumber; }
        public String getPassword() { return password; }
        public void setPassword(String password) { this.password = password; }
        public String getConfirmpassword() { return confirmpassword; }
        public void setConfirmpassword(String confirmpassword) { this.confirmpassword = confirmpassword; }

        public String getRole() { return role; }
        public void setRole(String role) { this.role = role; }


    }
}
