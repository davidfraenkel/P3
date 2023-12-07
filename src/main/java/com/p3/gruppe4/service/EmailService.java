package com.p3.gruppe4.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(String to, String subject, String text, String from) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setCc(from);
        message.setSubject(subject);
        message.setText(text);
        mailSender.send(message);
    }
}
