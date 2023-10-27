package com.p3.gruppe4.Users;

abstract class User {

    int id;
    String userName, password;

    public User(String username, String password){
        this.userName = username;
        this.password = password;
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
