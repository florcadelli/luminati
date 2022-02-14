package com.example.luminati.controller;


import com.example.luminati.model.DTO.ProductDTO;
import com.example.luminati.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private IProductService productService;


    @PostMapping()
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO){

        productService.createProduct(productDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ProductDTO readProduct(@PathVariable Long id){

        return productService.readProduct(id);

    }

    @PutMapping
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO productDTO) {

        ResponseEntity<?> response = null;

        if (productDTO.getId() != null && productService.readProduct(productDTO.getId()) != null){
            productService.updateProduct(productDTO);
            response = ResponseEntity.ok(HttpStatus.OK);
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){

        productService.deleteProduct(id);
        return ResponseEntity.status(HttpStatus.OK).body("id: "+id+" was deleted");

    }

    @GetMapping("/list")
    public Collection<ProductDTO> readProducts (){

        return productService.readProducts();

    }
}
