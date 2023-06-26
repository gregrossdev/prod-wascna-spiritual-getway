<script setup>
import { computed, onMounted, ref } from "vue";
import { toCurrency } from "@/shared/utils.js";
import { db } from "@/db/firebase.js";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import ShoppingCart from "@/components/Shopping/ShoppingCart.vue";
import ProductCard from "@/components/Products/ProductCard.vue";
// import { useCartStore} from "@/stores/storeCart.js";
// const storeCart = useCartStore();


const products = ref([]);
const cartRef = collection(db, "cart");

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
        paidFor: doc.data().paidFor
      };
      fbCart.push(item);
    });
    products.value = fbCart;
  });
});


const fishCabin = computed(() => {
  return products.value.filter((x) => x.cabin === "fish");
});

const eagleCabin = computed(() => {
  return products.value.filter((x) => x.cabin === "eagle");
});

const bearCabin = computed(() => {
  return products.value.filter((x) => x.cabin === "bear");
});

const deerCabin = computed(() => {
  return products.value.filter((x) => x.cabin === "deer");
});

// const noCabin = computed(() => {
//   return products.value.filter((x) => x.cabin === "none");
// });

function updateProductToCart(id) {
  const index = products.value.findIndex(item => item.id === id);
  updateDoc(doc(cartRef, id), {
    cart: !products.value[index].cart
  });
}

function removeProductFromCart(id) {
  const index = products.value.findIndex(item => item.id === id);
  updateDoc(doc(cartRef, id), {
    cart: !products.value[index].cart
  });
}
</script>

<template>


    <ShoppingCart />

    <header class="text-center p-8">
      <h2>WASCNA Spiritual Getaway</h2>
      <p>September 15 · 3pm - September 17 · 1pm EDT</p>
    </header>


    <h2>Fish Cabin</h2>
    <section>
      <figure>
        <img alt="Zion Retreat Center"
             class="rounded"
             src="../assets/fish.jpeg" />
      </figure>
      <div class="product-grid">
        <ProductCard
          v-for="item in fishCabin"
          :item="item"
          @addItem="updateProductToCart(item.id)"
          @removeItem="removeProductFromCart(item.id)"
        />
      </div>
    </section>

    <h2>Eagle Cabin</h2>
    <section>
      <figure>
        <img alt="Zion Retreat Center"
             class="rounded"
             src="../assets/eagle.jpeg" />
      </figure>
      <div class="product-grid">
        <ProductCard
          v-for="item in eagleCabin"
          :item="item"
          @addItem="updateProductToCart(item.id)"
          @removeItem="removeProductFromCart(item.id)"
        />
      </div>
    </section>

    <h2>Bear Cabin</h2>
    <section>
      <figure>
        <img alt="Zion Retreat Center"
             class="rounded"
             src="../assets/bear.jpeg" />
      </figure>
      <div class="product-grid">
        <ProductCard
          v-for="item in bearCabin"
          :item="item"
          @addItem="updateProductToCart(item.id)"
          @removeItem="removeProductFromCart(item.id)"
        />
      </div>
    </section>

    <h2>Deer Cabin</h2>
    <section>
      <figure>
        <img alt="Zion Retreat Center"
             class="rounded"
             src="../assets/deer.jpeg" />
      </figure>
      <div class="product-grid">
        <ProductCard
          v-for="item in deerCabin"
          :item="item"
          @addItem="updateProductToCart(item.id)"
          @removeItem="removeProductFromCart(item.id)"
        />
      </div>
    </section>

    <div class="mb-40"></div>

</template>


<style scoped>

h2 {
  @apply text-3xl font-bold py-2;
}

section {
  @apply py-4;
}

.product-grid {
  @apply grid gap-4 grid-cols-1 md:grid-cols-2 py-8;
}

</style>