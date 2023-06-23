<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import { toCurrency } from "@/shared/utils.js";
const swal = inject('$swal')

import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "@/db/firebase.js";

const cart = ref([]);
const cartRef = collection(db, "cart");
let ids = ref([]);

onMounted(() => {
  onSnapshot(cartRef, (querySnapshot) => {
    const fbCart = [];
    querySnapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        cabin: doc.data().cabin,
        name: doc.data().name,
        description: doc.data().description,
        price: doc.data().price,
        url: doc.data().url,
        cart: doc.data().cart,
        paidFor: doc.data().paidFor,
        quantity: 1
      };
      if(item.cart === true && !item.paidFor)
        fbCart.push(item);
    });
    cart.value = fbCart;
  });
});

function total() {
  let n = 0;
  const products = cart.value;
  products.forEach(x => {
    if(x.cart === true)
      n += x.price;
  })
  return n;
}

function removeProductFromCart(id) {
  const index = cart.value.findIndex(item => item.id === id);
  updateDoc(doc(cartRef, id), {
    cart: !cart.value[index].cart
  });
}

function refreshPage(id) {
  const index = cart.value.findIndex(item => item.id === id);
  updateDoc(doc(cartRef, id), {
    paidFor: !cart.value[index].paidFor
  });
  setInterval(() => {
    location.reload();
  }, 3000)
}

// paypal
const paypal = ref(null);
let  paidFor = ref(false);
let loaded = ref(false);

onMounted(() => {
  const script = document.createElement('script')
  script.src =
    'https://www.paypal.com/sdk/js?client-id=AWgwiyX_FGfMbtGAv-sQs3UYtxrUsLAzSIuTpRQ9uzQAYJKpQA9uUl_E4bCyTclRH38Txl-gVBxJZuC4'
  script.addEventListener('load', setLoaded)
  document.body.appendChild(script)
})

function setLoaded() {
  loaded = true
  window.paypal
    .Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "spiritual getaway",
              amount: {
                currency_code: 'USD',
                value: total()
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        paidFor.value = true
      },
      onError: (err) => {
        console.log(err)
      }
    })
    .render(paypal.value)
}


</script>


<template>

  <div class="p-4 max-w-4xl mx-auto">

    <div v-if="!cart.length">
      <h1 class="text-xl">Cart is empty.</h1>
    </div>
    <section v-if="paidFor" v-for="item in cart">
      {{ refreshPage(item.id) }}
    </section>
    <section v-if="!paidFor">
      <div class="space-y-4">
            <article class="card md:card-side bordered" v-for="item in cart">
                <figure class="p-8">
                <img
                    :src="item.url"
                    alt="Card Image"
                    class="object-contain w-full h-48"
                />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        <router-link class="link link-hover" :to="`/product/${item.id}`">{{ item.name }}</router-link>
                    </h2>
                    <p>{{ toCurrency(item.price) }}</p>
                    <div class="card-actions">
                        <div class="btn-group">
                            <button class="btn btn-primary" @click="removeProductFromCart(item.id)">Remove</button>
                            <button class="btn btn-ghost no-animation">{{ item.quantity }}</button>
                        </div>
                    </div>
                </div>
            </article>
        <div class="text-right text-2xl md:text-4xl">
          Total: {{ toCurrency(total()) }}
        </div>
      </div>
    </section>



    <div class="card md:card-side bordered mt-4" ref="paypal">
    </div>
  </div>
</template>