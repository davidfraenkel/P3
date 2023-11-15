package com.p3.gruppe4.Models.Users;

import org.bson.types.ObjectId;

public class User {
    private String username, firstname, lastname, email, phonenumber, password, confirmpassword;
    private ObjectId id;

    public User(String username, String firstname, String lastname, String email, String phonenumber, String password, String confirmpassword) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phonenumber = phonenumber;
        this.password = password;
        this.confirmpassword = confirmpassword;
        this.id = new ObjectId();
    }

    public String getUsername() { return username; }

    public String getFirstname() { return firstname; }

    public String getLastname() { return lastname; }

    public String getEmail() { return email; }

    public String getPhonenumber() { return phonenumber; }

    public String getPassword() { return password; }

    public String getConfirmpassword() { return confirmpassword; }

    public ObjectId getId() {
        return this.id;
    }
}