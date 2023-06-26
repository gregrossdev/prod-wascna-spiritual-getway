<script setup>
// import { useCartStore } from '@/stores/cart.js';
import {defineProps, defineEmits} from "vue"
import { toCurrency} from "@/shared/utils.js";

// const cartStore = useCartStore()
defineProps({
  item: Object
});

const emit = defineEmits(["updateCart"])
const emitAddToCart = () => {
  emit("addItem")
}
const emitRemoveFromCart = () => {
  emit("removeItem")
}
</script>


<template>
  <article class="card card-compact shadow-xl not-prose">
    <figure>
      <img
        :src="item.url"
        alt="Card Image"
      />
    </figure>
    <section class="card-body">
      <h2 class="card-title">
        {{ item.name }}
      </h2>
      <div v-if="!item.paidFor">
        <p class="font-semibold pb-4">{{ item.description }}</p>
        <div class="justify-end card-actions align-end">
          <button
            :class="{
                'btn-primary': !item.cart,
                'btn-success': item.cart,
              }"
            :disabled="item.cart"
            class="btn  btn-block "
            @click="emitAddToCart()"
          >
            {{ !item.cart ? toCurrency(item.price) : "Added" }}
          </button>
          <button
            :class="{
                'btn-warning': item.cart,
                'btn-info': !item.cart,
                }"
            :disabled="!item.cart"
            class="btn btn-block"
            @click="emitRemoveFromCart()" >
<!--            @click="removeProductFromCart(item.id)">-->
            {{ item.cart ? "Remove" : "Removed" }}
          </button>
        </div>
      </div>
      <div v-else>
        <h2 class="text-4xl font-bold">Reserved</h2>
      </div>
    </section>
  </article>
</template>

