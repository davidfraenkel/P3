package com.p3.gruppe4.Users;

public class ContentCreator extends User {

    int id;
    String userName, password, company;

    public ContentCreator(String username, String password, String company) {
        super(username, password, company);
    }

    @Override
    void login(String userName, String password) {
           
    }
}
