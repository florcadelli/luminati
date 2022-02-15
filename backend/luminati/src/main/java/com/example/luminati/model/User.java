package com.example.luminati.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "Users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String name;
    private String email;
    private String password;

    @ManyToOne
    @JoinColumn(name="rol_id", nullable = false)
    private Role role;

    @OneToMany
    @JoinColumn(name = "user_id")
    private Set<Cart> carts;

    @ManyToMany
    @JoinTable(name = "paymentMeth_user",
            joinColumns = @JoinColumn(name = "id_user"),
            inverseJoinColumns = @JoinColumn(name = "id_paymentMeth")
    )
    private Set<PaymentMethod> paymentMethods;

    public User() {

    }

    public User(String name, String email, String password, Role role, Set<Cart> carts, Set<PaymentMethod> paymentMethods) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.carts = carts;
        this.paymentMethods = paymentMethods;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role=" + role +
                ", carts=" + carts +
                ", paymentMethods=" + paymentMethods +
                '}';
    }
}
