// import { defineStore } from 'pinia';
// import { db } from '@/db/firebase.js'
// import { getDocs, collection } from "firebase/firestore";
//
// let cartCollectionRef = collection(db, "cart");
// const querySnapshot = await getDocs(cartCollectionRef);
//
// import allProducts from "@/db.json";
//
// export const useProductStore = defineStore({
//   id: 'products',
//
//   state: () => ({
//     items: {},
//     ids: [],
//   }),
//
//   getters: {
//     list() {
//       return this.ids.map((i) => this.items[i]);
//     },
//
//     loaded() {
//       return this.ids.length > 0;
//     },
//   },
//
//   actions: {
//     async fetchAll() {
//       if (this.loaded) return;
//
//       // const res = await fetch(allProducts);
//       const data = allProducts;
//
//       this.ids = data.forEach((product) => {
//         this.items[product.id] = product.data();
//         return product.id;
//       });
//     },
//   },
// });
