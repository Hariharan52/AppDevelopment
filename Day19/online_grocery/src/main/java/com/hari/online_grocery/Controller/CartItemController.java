package com.hari.online_grocery.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hari.online_grocery.Model.CartItem;
import com.hari.online_grocery.Service.CartItemService;

@RestController
@RequestMapping("/api/cart")
public class CartItemController {

    private final CartItemService cartItemService;

    @Autowired
    public CartItemController(CartItemService cartItemService) {
        this.cartItemService = cartItemService;
    }

    @GetMapping
    public List<CartItem> getCartItems() {
        return cartItemService.getAllItems();
    }

    @PostMapping
    public CartItem addItem(@RequestBody CartItem cartItem) {
        return cartItemService.addItem(cartItem);
    }

    @DeleteMapping("/{id}")
    public void removeItem(@PathVariable Long id) {
        cartItemService.removeItem(id);
    }

    @DeleteMapping("/clear")
    public void clearCart() {
        cartItemService.clearCart();
    }
}