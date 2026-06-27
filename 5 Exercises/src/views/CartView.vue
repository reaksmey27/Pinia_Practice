<template>
  <div class="card">
    <h2>Exercise 4: Shopping Cart</h2>
    
    <h3>Products</h3>
    <ul class="items-list">
      <li v-for="product in products" :key="product.id">
        <span class="item-info">{{ product.name }} <span class="price-tag">${{ product.price }}</span></span>
        <button @click="addToCart(product)" class="btn-action">Add to Cart</button>
      </li>
    </ul>

    <h3>Your Basket</h3>
    <p v-if="cart.length === 0" class="empty-msg">Your shopping basket is empty.</p>
    
    <ul class="items-list" v-else>
      <li v-for="item in cart" :key="item.product.id">
        <span class="item-info">{{ item.product.name }} <span class="qty-tag">x{{ item.quantity }}</span></span>
        <button @click="removeFromCart(item.product.id)" class="del-btn">Remove</button>
      </li>
    </ul>

    <div class="cart-totals" v-if="cart.length > 0">
      <p>Total Items: <span>{{ totalItems }}</span></p>
      <p>Total Cost: <span class="total-price">${{ totalPrice }}</span></p>
      <button @click="clearCart" class="btn-danger block-btn">Clear Entire Cart</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart'

const store = useCartStore()
const { products, cart, totalItems, totalPrice } = storeToRefs(store)
const { addToCart, removeFromCart, clearCart } = store
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: 20px auto;
  padding: 24px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background-color: var(--bg-surface);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.25rem;
}

h3 {
  margin: 24px 0 12px 0;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 6px;
  color: var(--text-main);
}

.items-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.items-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.02);
}

.dark-mode .items-list li {
  border-bottom-color: rgba(255, 255, 255, 0.02);
}

.item-info {
  color: var(--text-main);
}

.price-tag, .qty-tag {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin-left: 4px;
}

.empty-msg {
  color: var(--text-muted);
  font-style: italic;
  font-size: 0.9rem;
  margin: 12px 0;
}

.cart-totals {
  margin-top: 20px;
  padding-top: 14px;
  border-top: 2px dashed var(--border-color);
}

.cart-totals p {
  margin: 6px 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.cart-totals strong, .total-price {
  color: var(--text-main);
  font-weight: 600;
}

button {
  padding: 6px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background-color 0.15s ease, transform 0.1s ease;
}

button:active {
  transform: scale(0.97);
}

.btn-action {
  background-color: var(--bg-surface);
  color: var(--text-main);
}

.btn-action:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.dark-mode .btn-action:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.del-btn {
  color: #cc0000;
  border-color: #ffcccc;
  background-color: #ffeeee;
}

.del-btn:hover {
  background-color: #ffd8d8;
}

.dark-mode .del-btn {
  background-color: #2c1515;
  border-color: #5c2626;
  color: #ff8888;
}

.dark-mode .del-btn:hover {
  background-color: #3d1d1d;
}

.block-btn {
  width: 100%;
  padding: 10px;
  margin-top: 14px;
  font-size: 0.9rem;
}

.btn-danger {
  background-color: #ffeeee;
  border-color: #ffcccc;
  color: #cc0000;
}

.btn-danger:hover {
  background-color: #ffd8d8;
}

.dark-mode .btn-danger {
  background-color: #2c1515;
  border-color: #5c2626;
  color: #ff8888;
}

.dark-mode .btn-danger:hover {
  background-color: #3d1d1d;
}
</style>