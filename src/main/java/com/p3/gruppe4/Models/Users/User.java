package com.p3.gruppe4.Models.Users;

abstract class User {

    private int id;
    private String userName, password, role;

    public User(String username, String password, String role){
        this.userName = username;
        this.password = password;
        this.role = role;
    }

    public boolean login(String userName, String password) {
        return this.userName.equals(userName) && this.password.equals(password);
    };

    public int getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }
}
