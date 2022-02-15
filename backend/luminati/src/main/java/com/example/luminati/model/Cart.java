package com.example.luminati.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Carts")
@Getter
@Setter
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String status;

    @ManyToMany
    @JoinTable(name = "product_cart",
            joinColumns = @JoinColumn(name = "id_cart"),
            inverseJoinColumns = @JoinColumn(name = "id_product")
    )
    private List<Product> products;

    public Cart(){

    }

    public Cart(String status, List<Product> products) {
        this.status = status;
        this.products = products;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "status='" + status + '\'' +
                ", products=" + products +
                '}';
    }
}
