package com.p3.gruppe4.Controllers;
import com.p3.gruppe4.Models.Handbook.SaveFile;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")

public class FileuploadController {
    SaveFile images = new SaveFile();
    @PostMapping("/PictureUpload")
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
        images.store(file);
        // Implementation goes here
        return ResponseEntity.ok("File uploaded successfully");
    }

    @GetMapping("/test")
    public String test() {
        return "test";
    }
}
