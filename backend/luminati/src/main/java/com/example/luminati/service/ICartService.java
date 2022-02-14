package com.example.luminati.service;

import com.example.luminati.model.DTO.CartDTO;
import com.example.luminati.model.DTO.ProductDTO;


import java.util.Collection;


public interface ICartService {

    public void createCart(CartDTO cartDTO);

    public CartDTO readCart (Long id);

    public void deleteCart (Long id);


    //este aún no lo tengo claro, tengo q mirar un par de videos.
    // o sea, no se si quieren aplicarle el patrón State o
    //simplemente que sean status vacio, cargando, pagando, cerrado como strings y listo.
    public void changeStatus (Long id, String status);

    //tb podriamos trabajar solo con status abierto y cerrado, y cuando el usuario finalice la compra,
    // que se haga un update al carrito cambiandole el status a cerrado
    public void updateCart (CartDTO cartDTO);

    public Collection<CartDTO> readCarts ();

    public void addProduct (Long id_product, Long id_cart );

    public void deleteProduct (Long id_product, Long id_cart);

    //No se si es necesario pero lo pongo por las dudas, la idea es q al apretar
    // la cruz de un Producto dentro de carrito, se borren todas sus unidades para
    // que dejen de contabilizarse (y q luego desaparezca ese componente). Quiza tb se puede hacer desde el Front

    public void deleteAllSameProducts (Long prod_id, Long cart_id);


}
