package com.p3.gruppe4.service;

public class MeetingRequest {
    private String name;
    private String email;
    private String message;
    private String date;
    private SelectedTime selectedTime;

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public SelectedTime getSelectedTime() {
        return selectedTime;
    }

    public void setSelectedTime(SelectedTime selectedTime) {
        this.selectedTime = selectedTime;
    }
}
