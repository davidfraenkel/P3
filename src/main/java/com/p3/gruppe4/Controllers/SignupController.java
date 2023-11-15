package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Users.User;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import com.p3.gruppe4.Models.Users.UserAuth;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class SignupController {
    private UserAuth userAuth = new UserAuth(); // Assuming a "NormalUser" role

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        return this.userAuth.createUser(user).toJson();
    }
}
