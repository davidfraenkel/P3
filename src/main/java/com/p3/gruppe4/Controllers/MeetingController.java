package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Live.Meeting;
import com.p3.gruppe4.service.*;
import org.bson.Document;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class MeetingController extends Controller {

    private Meeting meeting;

    public MeetingController() {
        this.meeting = new Meeting(this.createClient());
    }

    @Autowired
    private EmailService emailService;



    @GetMapping("/getAllMeetings")
    public HashSet<Document> getAllMeetings(){
        return this.meeting.getAllMeetings();
    }

    @PostMapping("/contact")
    public String handleMeetingRequest(@RequestBody MeetingRequest request) {
        // Format the email content
        String emailContent = "Name: " + request.getName() + "\n"
                + "Email: " + request.getEmail() + "\n"
                + "Message: " + request.getMessage() + "\n"
                + "Date: " + request.getDate() + "\n"
                + "Time: " + request.getSelectedTime().getLabel();

        // Send the email
        emailService.sendEmail("gustaw1313@gmail.com", "New Meeting Request", emailContent);

        return this.meeting.createMeeting(request).toJson();
    }
}