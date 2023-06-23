<script setup>
import { computed, onMounted, ref } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/db/firebase.js";

const cart = ref([]);
const cartRef = collection(db, "cart");

onMounted(() => {
  onSnapshot(cartRef, (querySnapshot) => {
    const fbCart = [];
    querySnapshot.forEach((doc) => {
      const item = {
        cart: doc.data().cart,
        paidFor: doc.data().paidFor
      };
      fbCart.push(item);
    });
    cart.value = fbCart;
  });
});

console.log(cart)
const count = computed(() => {
  let n = 0;
  cart.value.forEach(item => {
    if(item.cart === true && !item.paidFor)
      n++;
  });
  return n;
});
</script>

<template>
  <header>
    <RouterLink to="/">
      <figure>
        <img
          alt="Zion Retreat Center"
          class="rounded-xl"
          src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F527568829%2F1585461542213%2F1%2Foriginal.20230602-023507?w=940&auto=format%2Ccompress&q=75&sharp=10&s=fa8497ebb85898a91d7c1c19bee2b45c"
        />
      </figure>
    </RouterLink>
    <RouterLink
      to="/register"
      class="no-underline bg-orange-600 px-8 py-4 text-white items-center text-2xl rounded flex"
    >
      Register
    </RouterLink>
  </header>

  <div class="chat chat-start fixed">
    <div class="chat-bubble chat-bubble-warning">
      <RouterLink to="/cart" class="font-bold text-6xl">
      CART {{ count }}
    </RouterLink></div>
  </div>
</template>


