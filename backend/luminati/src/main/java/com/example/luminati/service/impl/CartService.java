package com.example.luminati.service.impl;

import com.example.luminati.model.Cart;
import com.example.luminati.model.DTO.CartDTO;
import com.example.luminati.model.DTO.ProductDTO;
import com.example.luminati.model.Product;
import com.example.luminati.repository.ICartRepository;
import com.example.luminati.service.ICartService;
import com.example.luminati.service.IProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class CartService implements ICartService {

    @Autowired
    ICartRepository cartRepository;

    @Autowired
    IProductService productService;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void createCart(CartDTO cartDTO) {
        Cart cart = mapper.convertValue(cartDTO, Cart.class);
        cartRepository.save(cart);
    }

    @Override
    public CartDTO readCart (Long id){

        CartDTO cartDTO = null;
        Optional<Cart> cart = cartRepository.findById(id);
        if(cart.isPresent()){
            cartDTO = mapper.convertValue(cart, CartDTO.class);
        }
        return cartDTO;
    }

    @Override
    public void updateCart(CartDTO cartDTO) {
        Cart cart = mapper.convertValue(cartDTO, Cart.class);
        cartRepository.save(cart);
    }

    @Override
    public void deleteCart(Long id) {
        cartRepository.deleteById(id);
    }




    // ver que hacemos con este
    @Override
    public void changeStatus(Long id, String status) {

    }


    @Override
    public Collection<CartDTO> readCarts() {
        List<Cart> carts = cartRepository.findAll();
        List<CartDTO> cartsDTO = new ArrayList<>();

        for(Cart cart : carts){

            CartDTO cartDTO = new CartDTO();

            cartDTO.setId(cart.getId());
            cartDTO.setStatus(cart.getStatus());
            cartDTO.setProducts(cart.getProducts());


            cartsDTO.add(cartDTO);

        }

        return cartsDTO;
    }

    /*@Override
    public void addProduct(ProductDTO productDTO, CartDTO cartDTO) {

        Product product = mapper.convertValue(productDTO, Product.class);
        Cart cart = mapper.convertValue(cartDTO, Cart.class);

        List<Product> products = cart.getProducts(); // accedo a la lista de productos del carrito
        products.add(product); // le agrego un producto nuevo
        cart.setProducts(products);// le aviso al carrito que le agregue ese nuevo producto
        cartRepository.save(cart); // aviso a la base de datos que agregamos este nuevo producto


    }*/

    @Override
    public void addProduct(Long id_product, Long id_cart) {
        Cart cart = cartRepository.getById(id_cart); // busco el carrito con el id
        ProductDTO productDTO = productService.readProduct(id_product); // inyecte el productService para poder buscar el producto
        Product product = mapper.convertValue(productDTO, Product.class); // como me trae productDTO lo convierto a product

        List<Product> products = cart.getProducts(); // accedo a la lista de productos del carrito
        products.add(product); // le agrego un producto nuevo
        cart.setProducts(products);// le aviso al carrito que le agregue ese nuevo producto
        cartRepository.save(cart); // aviso a la base de datos que agregamos este nuevo producto
    }

    @Override
    public void deleteProduct(Long id_product, Long id_cart) {
        Cart cart = cartRepository.getById(id_cart); // busco el carrito con el id
        ProductDTO productDTO = productService.readProduct(id_product); // inyecte el productService para poder buscar el producto
        Product product = mapper.convertValue(productDTO, Product.class); // como me trae productDTO lo convierto a product

        List<Product> products = cart.getProducts(); // accedo a la lista de productos del carrito
        if (products.remove(product)) {    // elimino el producto
            cart.setProducts(products);// le aviso al carrito que le borre ese producto
            cartRepository.save(cart); // aviso a la base de datos que eliminamos este nuevo producto
            System.out.println("Product deleted");
        } else {
            System.out.println("Error. The product could´nt be deleted");
            
        }

    }

    @Override
    public void deleteAllSameProducts(Long prod_id, Long cart_id) {

        /*cartRepository.deleteAllSameProducts(prod_id, cart_id);*/

        //2 Opciones
        // 1- Hacer query nueva. Vamos a la tabla intermedia
        // y borramos todos los productos con este id que esten en el carrito_id.

        //SQL:
        // delete from product_cart where id_product= prod_id && id_cart= cart_id

        //HQL =>  @Query(delete p from product_cart p where p.id_product = ?1 && p.id_cart = ?2")
        // void deleteAllSameProducts(Long id_product, Long id_cart)

        //opcion 2. hacerlo con objetos.
        //acceder al carrito, accedemos a la lista de productos, y busco si esta el id_product (si esta lo elimino)
        // y voy eliminando con un bucle

        Cart cart = cartRepository.getById(cart_id); // accedo al carro
        List<Product> products = cart.getProducts(); // accedo a la lista de productos del carrito

        for(Product product : products){       //si encuentro el producto dentro de la lista lo borro
            if(product.getId() == prod_id){
                products.remove(product);
                cart.setProducts(products);// le aviso al carrito que le borre ese producto
                cartRepository.save(cart); // aviso a la base de datos que eliminamos este nuevo producto
                System.out.println("Product removed");
            } else{
                System.out.println("Error. The product wasn´t removed");
            }
        }
    }
}
