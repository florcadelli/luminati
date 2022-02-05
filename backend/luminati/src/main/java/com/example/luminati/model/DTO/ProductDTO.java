package com.example.luminati.model.DTO;


import com.example.luminati.model.Category;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
public class ProductDTO {

    private Long id;
    private String name;
    private Float price;
    private String description;
    private String imageUrl;
    private Category category;


    public ProductDTO(String name, Float price, String description, String imageUrl, Category category) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.category = category;
    }

    public ProductDTO(){};
}
