"use strict";
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('products',{
    name:'products',
    data() {
        return {
            products: [],
            imgCatalog: 'https://placehold.it/200x150',
            catalogUrl: '/catalogData.json',
        }
    },
    template:
        `
        <div class="products" v-if="this.$root.isOkay">
            <div class="product-item" v-for="product of $root.$refs.search.searchedProducts" :key="product.id_product">
                <product-item class="product-item"
                    :img="imgCatalog"
                    :product="product">
                </product-item>
            </div>
        </div>
        `
    ,
    mounted() {
        this.$root.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data) {
                    this.products.push(el);
                }
                this.$root.$refs.cart.createCart();
                this.$root.$refs.search.filterGoods();
            });
    },
});

Vue.component('product-item', {
    name: 'product-item',
    props:['product','img'],
    template:
        `
        <div>
            <img :src="img" alt="some img">
            <div class="desc">
                <h3>{{product.product_name}}</h3>
                <p>{{product.price}}</p>
                <button class="buy-btn" @click="$root.addProduct($root.$refs.cart.filter(product))">Купить</button>
            </div>
        </div>
        `
});