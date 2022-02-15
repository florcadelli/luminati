package com.example.luminati.controller;


import com.example.luminati.model.DTO.UserDTO;
import com.example.luminati.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService userService;

    @PostMapping()
    public ResponseEntity<?> addUser(@RequestBody UserDTO userDTO){

        userService.createUser(userDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public UserDTO readUser(@PathVariable Long id){

        return userService.readUser(id);

    }

    @PutMapping
    public ResponseEntity<?> updateUser(@RequestBody UserDTO userDTO) {

        ResponseEntity<?> response = null;

        if (userDTO.getId() != null && userService.readUser(userDTO.getId()) != null){
            userService.updateUser(userDTO);
            response = ResponseEntity.ok(HttpStatus.OK);
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id){

        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.OK).body("id: "+id+" was deleted");

    }

    @GetMapping("/list")
    public Collection<UserDTO> readUsers (){

        return userService.readUsers();

    }

}
