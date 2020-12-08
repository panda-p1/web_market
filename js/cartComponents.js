"use strict";

Vue.component('cart',{
    name:'cart',
    props:[],
    data() {
        return {
            cartProducts: [],
            cartImgCatalog: 'https://placehold.it/50x100',
            isVisibleCart: false,
        }
    },
    methods: {
        createCart() {// создает корзину с объектами такого же типа как и продукт, но с добавлением свойства
            for (let product of this.$root.$refs.products.products) {
                this.cartProducts.push(Object.assign({quantity: 0}, product));
            }
        },
        /**
         * @param product объект типа продукта
         * @returns {product} объект типа продукта из корзины (т.е. со свойством quantity)
         */
        filter(product) {
            return this.cartProducts.filter(el => el.id_product === product.id_product)[0];
        },
        sumOfQuantities() {
            return this.cartProducts.some(el => el.quantity !== 0)
        }
    },
    
    template: `
        <div class="btn-div">
            <button class="btn-cart" type="button" @click="isVisibleCart = !isVisibleCart">Корзина</button>
            <div class="cart-item" v-show="isVisibleCart">
            <div class="cart-block" v-if="sumOfQuantities()">
                <cart-item
                 v-for="product of cartProducts" v-if="product.quantity>0""
                 :key="product.id_product"
                 :product="product"
                 :img="cartImgCatalog">
                </cart-item>
                </div>
            <p v-else class="cart-block">Корзина пуста!</p>
            </div>
        </div>
            `,
});

Vue.component('cart-item', {
    props: ['product','img'],
    template:
        `<div class="cart-item">
             <div class="product-bio">
                 <img :src="img" alt="some image">
                 <div class="product-desc">
                    <p class="product-title">{{product.product_name}}</p>
                    <p class="product-quantity">Quantity: {{product.quantity}}</p>
                    <p class="product-single-price">{{product.price}} each</p>
                    
                 </div>
             </div>
             <div class="right-block">
          
                 <p class="product-price">{{product.price * product.quantity}}</p>
                 <button class="del-btn" @click="$root.addProduct(product)">&#10004;</button>
                 <button class="del-btn" @click="$root.removeProduct(product)">&times;</button>
             </div>
        </div>
        `
});