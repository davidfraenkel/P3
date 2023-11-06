package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Users.ContentCreator;
import org.springframework.web.bind.annotation.*;

@RestController
public class AdminController {

    @PostMapping("/addContentCreator")
    public void addContentCreator(@RequestBody ContentCreator contentCreator){
        System.out.println("Hej \n\n\n\n Hej");
    }
}
