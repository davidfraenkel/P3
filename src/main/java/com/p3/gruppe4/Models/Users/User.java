package com.p3.gruppe4.Models.Users;

abstract class User {

    private int id;
    private String userName, password, role;

    public User(String username, String password, String role){
        this.userName = username;
        this.password = password;
        this.role = role;
    }

    void login(String userName, String password) {
        System.out.println("Login logic");
    };

    public int getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }
}
