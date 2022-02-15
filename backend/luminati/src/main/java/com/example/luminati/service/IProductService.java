package com.example.luminati.service;


import com.example.luminati.model.DTO.ProductDTO;

import java.util.Collection;

public interface IProductService {

    public void createProduct(ProductDTO productDTO);

    public ProductDTO readProduct (Long id);

    public void updateProduct (ProductDTO productDTO);

    public void deleteProduct (Long id);

    public Collection<ProductDTO> readProducts ();
}
