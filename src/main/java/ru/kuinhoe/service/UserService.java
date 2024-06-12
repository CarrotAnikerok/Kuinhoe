package ru.kuinhoe.service;

import java.util.List;

import ru.kuinhoe.model.User;


public interface UserService {
    List<User> findAllUsers();
    User saveUser(User user);
    User findByEmail(String email);
    User updateUser (User user);
    void deleteUser(String email);
}
