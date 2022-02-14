package com.example.luminati.controller;

import com.example.luminati.model.Cart;
import com.example.luminati.model.DTO.CartDTO;
import com.example.luminati.model.DTO.CategoryDTO;
import com.example.luminati.model.DTO.ProductDTO;
import com.example.luminati.service.ICartService;
import com.example.luminati.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private ICartService cartService;

    @PostMapping()
    public ResponseEntity<?> addCart(@RequestBody CartDTO cartDTO){

        cartService.createCart(cartDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public CartDTO readCategory(@PathVariable Long id){

        return cartService.readCart(id);

    }

    @PutMapping
    public ResponseEntity<?> updateCart(@RequestBody CartDTO cartDTO) {

        ResponseEntity<?> response = null;

        if (cartDTO.getId() != null && cartService.readCart(cartDTO.getId()) != null){
            cartService.updateCart(cartDTO);
            response = ResponseEntity.ok(HttpStatus.OK);
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCart(@PathVariable Long id){

        cartService.deleteCart(id);
        return ResponseEntity.status(HttpStatus.OK).body("id: "+id+" was deleted");

    }

    @GetMapping("/list")
    public Collection<CartDTO> readCarts(){

        return cartService.readCarts();

    }

   /* @PostMapping("/addProduct")
    public ResponseEntity<?> addProduct (@RequestBody ProductDTO productDTO, CartDTO cartDTO) {

        ResponseEntity<?> response = null;

        if (productDTO.getId() != null && cartService.readCart(productDTO.getId()) != null && cartDTO.getId() != null && cartService.readCart(cartDTO.getId()) != null){
            cartService.addProduct(productDTO,cartDTO);
            response = ResponseEntity.ok(HttpStatus.OK);
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return response;

    }*/

    @PostMapping("/addProduct/{id_product}/{id_cart}")
    public ResponseEntity<?> addProduct (@PathVariable Long id_product,
                                         @PathVariable Long id_cart) {

        CartDTO cartdto = cartService.readCart(id_cart);
        ResponseEntity<?> response = null;

        if(cartdto != null && id_cart != null && id_product != null){

            cartService.addProduct(id_product, id_cart);
            response = ResponseEntity.status(HttpStatus.OK).body("id_product: "+id_product+ " from id_cart: "+ id_cart + " was added");
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("id_product: "+id_product+ " from id_cart: "+ id_cart + " COULD´NT BE ADDED");
        }
        return response;
    }

    //ver si esta bien escrito
    @DeleteMapping("/deleteProduct/{id_product}/{id_cart}")
    public ResponseEntity<?> deleteProduct (@PathVariable Long id_product,
                                            @PathVariable Long id_cart){

        cartService.deleteProduct(id_product, id_cart);
        return ResponseEntity.status(HttpStatus.OK).body("id_product: "+id_product+ " from id_cart: "+ id_cart + " was deleted");

    }

    @DeleteMapping("/deleteAllProducts/{id_product}/{id_cart}")
    public ResponseEntity<?> deleteAllSameProducts (@PathVariable Long id_product,
                                                    @PathVariable Long id_cart){

        cartService.deleteAllSameProducts(id_product, id_cart);
        return ResponseEntity.status(HttpStatus.OK).body("id_product: "+id_product+ " from id_cart: "+ id_cart + " was deleted");

    }





}
