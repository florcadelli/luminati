package com.example.luminati.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoleDTO {

    private Long id;
    private String name;

    public RoleDTO(String name) {
        this.name = name;
    }

    public RoleDTO(){

    }

}
