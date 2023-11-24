package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.service.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class MeetingController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/contact")
    public String handleMeetingRequest(@RequestBody MeetingRequest request) {
        // Format the email content
        String emailContent = "Name: " + request.getName() + "\n"
                + "Email: " + request.getEmail() + "\n"
                + "Message: " + request.getMessage() + "\n"
                + "Date: " + request.getDate() + "\n"
                + "Time: " + request.getSelectedTime();

        // Send the email
        emailService.sendEmail("gustaw1313@gmail.com", "New Meeting Request", emailContent);

        return "Meeting request received";
    }
}
