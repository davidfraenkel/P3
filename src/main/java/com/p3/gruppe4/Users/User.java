package com.p3.gruppe4.Users;

abstract class User {

    int id;
    String userName, password, company;

    public User(String username, String password, String company){
        this.userName = username;
        this.password = password;
        this.company = company;
    }

    abstract void login(String userName, String password);

    public String getCompany() {
        return company;
    }

    public int getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }
}
