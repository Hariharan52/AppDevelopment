package com.hari.online_grocery.Repository;

import org.springframework.data.repository.CrudRepository;

import com.hari.online_grocery.Model.CartItem;

public interface CartItemRepository extends CrudRepository<CartItem, Long> {
}