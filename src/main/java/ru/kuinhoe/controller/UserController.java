package ru.kuinhoe.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import ru.kuinhoe.model.User;
import ru.kuinhoe.service.UserService;


@RestController
@RequestMapping("/api/v1/kuinhoe")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public List<User> findAllUsers() {
        return userService.findAllUsers();
    }

    @PostMapping("save_user")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/{email}")
    public User findByEmail(@PathVariable("email") String email) {
        return userService.findByEmail(email);
    }

    @PutMapping("update_user")
    public User updateUser(@RequestBody User user)  {
        return userService.updateUser(user);
    }

    @DeleteMapping("/delete_user/{email}")
    public void deleteUser(@PathVariable("email") String email) {
        userService.deleteUser(email);
    }
}
