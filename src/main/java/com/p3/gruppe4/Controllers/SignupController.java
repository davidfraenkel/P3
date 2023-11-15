package com.p3.gruppe4.Controllers;

import com.p3.gruppe4.Models.Users.User;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import com.p3.gruppe4.Models.Users.UserAuth;

@RestController
@RequestMapping("/api")
public class SignupController {
    private UserAuth userAuth = new UserAuth(); // Assuming a "NormalUser" role

    @PostMapping("/signup")
    public void signup(@RequestBody User user) {
        this.userAuth.createUser(user);
    }
}
