package com.example.luminati.service.impl;

import com.example.luminati.model.DTO.UserDTO;
import com.example.luminati.model.User;
import com.example.luminati.repository.IUserRepository;
import com.example.luminati.service.IUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService implements IUserService {


    @Autowired
    IUserRepository userRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void createUser(UserDTO userDTO) {
        User user = mapper.convertValue(userDTO, User.class);
        userRepository.save(user);
    }

    @Override
    public UserDTO readUser(Long id) {
        UserDTO userDTO = null;
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            userDTO = mapper.convertValue(user, UserDTO.class);
        }
        return userDTO;
    }

    @Override
    public void updateUser(UserDTO userDTO) {

        User user = mapper.convertValue(userDTO, User.class);
        userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public Collection<UserDTO> readUsers() {
        List<User> users = userRepository.findAll();
        Set<UserDTO> usersDTO = new HashSet<>();

        for(User user : users){

            UserDTO userDTO = new UserDTO();

            userDTO.setId(user.getId());
            userDTO.setName(user.getName());
            userDTO.setEmail(user.getEmail());
            userDTO.setPassword(user.getPassword());
            userDTO.setRole(user.getRole());
            userDTO.setCarts(user.getCarts());
            userDTO.setPaymentMethods(user.getPaymentMethods());


            usersDTO.add(userDTO);

        }

        return usersDTO;
    }
}
