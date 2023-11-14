package com.p3.gruppe4.Controllers;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import com.p3.gruppe4.Models.Users.UserAuth;

@RestController
@RequestMapping("/api")
public class SignupController {

    @PostMapping("/signup")
    public Map<String, String> signup(@RequestBody User user) {
        UserAuth userAuth = new UserAuth(user.getUsername(), user.getPassword(), "NormalUser"); // Assuming a "NormalUser" role
        userAuth.createUser(user.getUsername(), user.getPassword(), "NormalUser", user.getEmail(), user.getPhonenumber(), user.getUsername(), user.getLastname());
        Map<String, String> response = new HashMap<>();
        response.put("message", "User registered successfully!");
        return response;
    }

    public static class User {
        private String username, firstname, lastname, email, phonenumber, password, confirmpassword;

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

    }
}
