package com.example.luminati.model.DTO;

import com.example.luminati.model.Product;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class CartDTO {

    private Long id;
    private String status;
    private List<Product> products;


    public CartDTO(String status, List<Product> products) {
        this.status = status;
        this.products = products;
    }

    public CartDTO(){

    }
}
