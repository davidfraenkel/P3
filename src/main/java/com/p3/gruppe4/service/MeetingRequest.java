package com.p3.gruppe4.service;

public class MeetingRequest {
    private String name;
    private String email;
    private String message;
    private String date;
    private String selectedTime;

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getMessage() {
        return message;
    }

    public String getDate() {
        return date;
    }

    public String getSelectedTime() {
        return selectedTime;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email= email;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setSelectedTime(String selectedTime) {
        this.selectedTime = selectedTime;
    }
}
