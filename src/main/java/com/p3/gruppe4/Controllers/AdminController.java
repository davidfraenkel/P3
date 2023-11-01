package com.p3.gruppe4.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @GetMapping("/hello")
    public String hello(){
        return "HalliHello";
    }
}
