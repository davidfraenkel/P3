package com.p3.gruppe4.Models.Users;

import org.bson.types.ObjectId;

public class User {
    private String username, lastname, email, phonenumber, password, confirmpassword, role;
    private ObjectId id;

    public User(String username, String lastname, String email, String phonenumber, String password, String confirmpassword, String role) {
        this.username = username;
        this.lastname = lastname;
        this.email = email;
        this.phonenumber = phonenumber;
        this.password = password;
        this.confirmpassword = confirmpassword;
        this.role = role;
        this.id = new ObjectId();
    }

    public boolean login(String userName, String password) {
        return this.username.equals(userName) && this.password.equals(password);
    };

    public String getUsername() { return username; }


    public String getLastname() { return lastname; }

    public String getEmail() { return email; }

    public String getPhonenumber() { return phonenumber; }

    public String getPassword() { return password; }

    public String getRole() { return role; }

    public String getConfirmpassword() { return confirmpassword; }

    public ObjectId getId() {
        return this.id;
    }
}