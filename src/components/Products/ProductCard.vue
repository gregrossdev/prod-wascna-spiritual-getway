<script setup>
// import { useCartStore } from '@/stores/cart.js';
import { toCurrency } from '@/shared/utils.js'
import { defineProps } from 'vue';

// const cartStore = useCartStore()
defineProps({
  product: Object
})
</script>


<template>
  <article class="card card-compact shadow-xl not-prose">
        <figure>
            <img
                :src="product.image"
                alt="Card Image"
            />
        </figure> 
        <section class="card-body">
            <h2 class="card-title">
                <RouterLink class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</RouterLink>
            </h2>
            <p>{{ toCurrency(product.price) }}</p>
            <div class="justify-end card-actions">
                <button class="btn btn-primary" @click="cartStore.add(product.id)">Add to Cart</button>
            </div>
        </section>
    </article>
</template>

