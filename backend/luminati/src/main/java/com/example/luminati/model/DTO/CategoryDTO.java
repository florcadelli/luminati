package com.example.luminati.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryDTO {

    private Long id;

    private String name;


    public CategoryDTO(String name) {
        this.name = name;
    }

    public CategoryDTO(){}
}
