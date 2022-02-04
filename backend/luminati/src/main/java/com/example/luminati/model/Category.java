package com.example.luminati.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table (name = "Categories")
@Getter @Setter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String name;

    public Category(){}

    public Category(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
