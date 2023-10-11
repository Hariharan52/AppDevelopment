package com.hari.online_grocery.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hari.online_grocery.Model.CartItem;
import com.hari.online_grocery.Repository.CartItemRepository;

@Service
public class CartItemService {

    private final CartItemRepository cartItemRepository;

    @Autowired
    public CartItemService(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    public List<CartItem> getAllItems() {
        return (List<CartItem>) cartItemRepository.findAll();
    }

    public CartItem addItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    public void removeItem(Long id) {
        cartItemRepository.deleteById(id);
    }

    public void clearCart() {
        cartItemRepository.deleteAll();
    }
}
