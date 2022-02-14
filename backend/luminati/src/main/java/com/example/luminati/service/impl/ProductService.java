package com.example.luminati.service.impl;

import com.example.luminati.model.Category;
import com.example.luminati.model.DTO.CategoryDTO;
import com.example.luminati.model.DTO.ProductDTO;
import com.example.luminati.model.Product;
import com.example.luminati.repository.IProductRepository;
import com.example.luminati.service.IProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService implements IProductService {

    @Autowired
    IProductRepository productRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public void createProduct(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        productRepository.save(product);
    }

    @Override
    public ProductDTO readProduct(Long id) {

        ProductDTO productDTO = null;
        Optional<Product> product = productRepository.findById(id);
        if(product.isPresent()){
            productDTO = mapper.convertValue(product, ProductDTO.class);
        }
        return productDTO;
    }

    @Override
    public void updateProduct(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id) {

        productRepository.deleteById(id);
    }

    @Override
    public Collection<ProductDTO> readProducts() {

        List<Product> products = productRepository.findAll();
        Set<ProductDTO> productsDTO = new HashSet<>();

        for(Product product : products){

            ProductDTO productDTO = new ProductDTO();

            productDTO.setId(product.getId());
            productDTO.setName(product.getName());
            productDTO.setPrice(product.getPrice());
            productDTO.setDescription(product.getDescription());
            productDTO.setImageUrl(product.getImageUrl());
            productDTO.setCategory(product.getCategory());


            productsDTO.add(productDTO);

        }

        return productsDTO;
    }
}
