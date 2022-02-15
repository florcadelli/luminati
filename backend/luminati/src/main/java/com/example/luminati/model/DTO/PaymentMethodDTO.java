package com.example.luminati.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentMethodDTO {

    private Long id;
    private String type;

    public PaymentMethodDTO(String type) {
        this.type = type;
    }

    public PaymentMethodDTO(){

    }
}
