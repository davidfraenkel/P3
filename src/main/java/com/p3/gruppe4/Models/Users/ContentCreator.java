package com.p3.gruppe4.Models.Users;

public class ContentCreator extends User {

    private int id;
    private String userName, password, role;

    public ContentCreator(String username, String password, String role, int id, String userName, String password1) {
        super(username, password, role);
        this.id = id;
        this.userName = userName;
        this.password = password1;
        this.role = role;
    }
}
