package com.example.luminati.service.impl;

import com.example.luminati.model.Category;
import com.example.luminati.model.DTO.CategoryDTO;
import com.example.luminati.repository.ICategoryRepository;
import com.example.luminati.service.ICategoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    ICategoryRepository categoryRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void createCategory(CategoryDTO categoryDTO){

        Category category = mapper.convertValue(categoryDTO, Category.class);
        categoryRepository.save(category);

    }

    @Override
    public CategoryDTO readCategory (Long id){

        CategoryDTO categoryDTO = null;
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isPresent()){
            categoryDTO = mapper.convertValue(category, CategoryDTO.class);
        }
        return categoryDTO;
    }

    @Override
    public void updateCategory (CategoryDTO categoryDTO){

        Category category = mapper.convertValue(categoryDTO,Category.class);
        categoryRepository.save(category);

    }

    @Override
    public void deleteCategory (Long id){

        categoryRepository.deleteById(id);

    }

    @Override
    public Collection<CategoryDTO> readCategories (){

        List<Category> categories = categoryRepository.findAll();
        Set<CategoryDTO> categoriesDTO = new HashSet<>();

        for(Category category : categories){

            CategoryDTO categoryDTO = new CategoryDTO();

            categoryDTO.setId(category.getId());
            categoryDTO.setName(category.getName());


            categoriesDTO.add(categoryDTO);

        }

        return categoriesDTO;

    }
}
