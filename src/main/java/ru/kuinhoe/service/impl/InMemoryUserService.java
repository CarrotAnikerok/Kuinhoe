package ru.kuinhoe.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import ru.kuinhoe.model.User;
import ru.kuinhoe.repository.InMemoryUserDAO;
import ru.kuinhoe.service.UserService;

@Service
@AllArgsConstructor
public class InMemoryUserService implements UserService{

    private final InMemoryUserDAO userRepository;

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAllUsers();
    }

    @Override
    public User saveUser(User user) {
        return userRepository.saveUser(user);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User updateUser(User user) {
        return userRepository.updateUser(user);
    }

    @Override
    public void deleteUser(String email) {
        userRepository.deleteUser(email);
    }

    
}