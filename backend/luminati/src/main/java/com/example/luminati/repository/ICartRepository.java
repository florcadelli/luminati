package com.example.luminati.repository;

import com.example.luminati.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Long> {

    /*@Query("delete p from Product_cart p where p.id_product = ?1 and p.id_cart = ?2")
    void deleteAllSameProducts(Long id_product, Long id_cart);*/

}
