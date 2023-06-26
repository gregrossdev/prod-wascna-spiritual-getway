<script setup>
import { computed, onMounted, ref } from "vue";
import { toCurrency } from "@/shared/utils.js";
import { db } from "@/db/firebase.js";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
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
  <section class="prose prose-xl">

    <header class="text-center text-xl font-semibold px-8 py-2">
      <h2>WASCNA Spiritual Getaway</h2>
      <p>September 15 · 3pm - September 17 · 1pm EDT</p>
    </header>

<!--    <h2>Day Pass</h2>-->
<!--    <section>-->
<!--      <figure>-->
<!--        <img alt="Zion Retreat Center"-->
<!--             class="rounded"-->
<!--             src="../assets/fish.jpeg" />-->
<!--      </figure>-->
<!--      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 py-2">-->
<!--        <article v-for="item in noCabin"-->
<!--                 class="card card-compact shadow-xl not-prose">-->
<!--          <figure>-->
<!--            <img-->
<!--              :src="item.url"-->
<!--              alt="Card Image"-->
<!--            />-->
<!--          </figure>-->
<!--          <section class="card-body">-->
<!--            <h2 class="card-title">-->
<!--              {{ item.name }}-->
<!--            </h2>-->
<!--            <div v-if="!item.paidFor">-->
<!--              <p class="font-semibold pb-4">{{ item.description }}</p>-->
<!--              <div class="justify-end card-actions">-->
<!--                <button-->
<!--                  :class="{-->
<!--                'btn-primary': !item.cart,-->
<!--                'btn-success': item.cart,-->
<!--              }"-->
<!--                  :disabled="item.cart"-->
<!--                  class="btn  btn-block "-->
<!--                  @click="updateProductToCart(item.id)"-->
<!--                >-->
<!--                  {{ !item.cart ? toCurrency(item.price) : "Added" }}-->
<!--                </button>-->
<!--                <button-->
<!--                  :class="{-->
<!--                'btn-warning': item.cart,-->
<!--                'btn-info': !item.cart,-->
<!--                }"-->
<!--                  :disabled="!item.cart"-->
<!--                  class="btn btn-block"-->
<!--                  @click="removeProductFromCart(item.id)">-->
<!--                  {{ item.cart ? "Remove" : "Removed" }}-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div v-else>-->
<!--              <h2 class="text-4xl font-bold">Reserved</h2>-->
<!--            </div>-->

<!--          </section>-->
<!--        </article>-->
<!--      </div>-->
<!--    </section>-->


    <h2>Fish Cabin</h2>
    <section>
      <figure>
        <img alt="Zion Retreat Center"
             class="rounded"
             src="../assets/fish.jpeg" />
      </figure>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 py-2">
        <article v-for="item in fishCabin"
                 class="card card-compact shadow-xl not-prose">
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
              <div class="justify-end card-actions">
                <button
                  :class="{
                'btn-primary': !item.cart,
                'btn-success': item.cart,
              }"
                  :disabled="item.cart"
                  class="btn  btn-block "
                  @click="updateProductToCart(item.id)"
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
                  @click="removeProductFromCart(item.id)">
                  {{ item.cart ? "Remove" : "Removed" }}
                </button>
              </div>
            </div>
            <div v-else>
              <h2 class="text-4xl font-bold">Reserved</h2>
            </div>

          </section>
        </article>
      </div>
    </section>

    <h2>Eagle Cabin</h2>
    <section>
      <figure>
        <img alt="Zion Retreat Center"
             class="rounded"
             src="../assets/fish.jpeg" />
      </figure>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 py-2">
        <article v-for="item in eagleCabin"
                 class="card card-compact shadow-xl not-prose">
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
              <div class="justify-end card-actions">
                <button
                  :class="{
                'btn-primary': !item.cart,
                'btn-success': item.cart,
              }"
                  :disabled="item.cart"
                  class="btn  btn-block "
                  @click="updateProductToCart(item.id)"
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
                  @click="removeProductFromCart(item.id)">
                  {{ item.cart ? "Remove" : "Removed" }}
                </button>
              </div>
            </div>
            <div v-else>
              <h2 class="text-4xl font-bold">Reserved</h2>
            </div>

          </section>
        </article>
      </div>
    </section>

    <h2>Bear Cabin</h2>
    <section>
      <figure>
        <img alt="Zion Retreat Center"
             class="rounded"
             src="../assets/fish.jpeg" />
      </figure>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 py-2">
        <article v-for="item in bearCabin"
                 class="card card-compact shadow-xl not-prose">
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
              <div class="justify-end card-actions">
                <button
                  :class="{
                'btn-primary': !item.cart,
                'btn-success': item.cart,
              }"
                  :disabled="item.cart"
                  class="btn  btn-block "
                  @click="updateProductToCart(item.id)"
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
                  @click="removeProductFromCart(item.id)">
                  {{ item.cart ? "Remove" : "Removed" }}
                </button>
              </div>
            </div>
            <div v-else>
              <h2 class="text-4xl font-bold">Reserved</h2>
            </div>

          </section>
        </article>
      </div>
    </section>

    <h2>Deer Cabin</h2>
    <section>
      <figure>
        <img alt="Zion Retreat Center"
             class="rounded"
             src="../assets/fish.jpeg" />
      </figure>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 py-2">
        <article v-for="item in deerCabin"
                 class="card card-compact shadow-xl not-prose">
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
              <div class="justify-end card-actions">
                <button
                  :class="{
                'btn-primary': !item.cart,
                'btn-success': item.cart,
              }"
                  :disabled="item.cart"
                  class="btn  btn-block "
                  @click="updateProductToCart(item.id)"
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
                  @click="removeProductFromCart(item.id)">
                  {{ item.cart ? "Remove" : "Removed" }}
                </button>
              </div>
            </div>
            <div v-else>
              <h2 class="text-4xl font-bold">Reserved</h2>
            </div>

          </section>
        </article>
      </div>
    </section>

  </section>

</template>