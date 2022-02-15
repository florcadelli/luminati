package com.example.luminati.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Payment_Methods")
@Getter
@Setter
public class PaymentMethod {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String type;

    public PaymentMethod(){

    }

    public PaymentMethod(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "PaymentMethod{" +
                "type='" + type + '\'' +
                '}';
    }
}
