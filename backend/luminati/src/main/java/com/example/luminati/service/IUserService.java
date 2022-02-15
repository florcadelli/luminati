package com.example.luminati.service;


import com.example.luminati.model.DTO.UserDTO;

import java.util.Collection;

public interface IUserService {

    public void createUser(UserDTO userDTO);

    public UserDTO readUser (Long id);

    public void updateUser (UserDTO userDTO);

    public void deleteUser (Long id);

    public Collection<UserDTO> readUsers ();
}
