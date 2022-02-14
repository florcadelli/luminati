package com.example.luminati.model.DTO;

import com.example.luminati.model.Cart;
import com.example.luminati.model.PaymentMethod;
import com.example.luminati.model.Role;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class UserDTO {

    private Long id;
    private String name;
    private String email;
    private String password;
    private Role role;
    private Set<Cart> carts;
    private Set<PaymentMethod> paymentMethods;

    public UserDTO(String name, String email, String password, Role role, Set<Cart> carts, Set<PaymentMethod> paymentMethods) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.carts = carts;
        this.paymentMethods = paymentMethods;
    }

    public UserDTO(){

    }
}
