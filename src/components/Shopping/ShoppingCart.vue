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

console.log(cart);
const count = computed(() => {
  let n = 0;
  cart.value.forEach(item => {
    if (item.cart === true && !item.paidFor)
      n++;
  });
  return n;
});
</script>

<template>

    <nav class="indicator fixed bottom-0 z-20">
    <span class="indicator-item badge badge-secondary p-8 text-3xl">
       {{ count }}
    </span>
      <div class="grid w-32 h-32 bg-slate-400 place-items-center">
        <RouterLink to="/cart" class="text-black font-bold text-2xl">
          CART
        </RouterLink>
      </div>
    </nav>

</template>


