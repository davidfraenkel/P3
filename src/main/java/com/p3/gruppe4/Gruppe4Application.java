package com.p3.gruppe4;

import com.p3.gruppe4.Models.Users.Admin;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Gruppe4Application {

	public static void main(String[] args) {
		// Database setup
		Admin newAdmin = new Admin("Admin user", "password", "Admin");

		newAdmin.addUser("User 1", "password123", "Admin");

		// Spring Boot run
		SpringApplication.run(Gruppe4Application.class, args);
	}
}
