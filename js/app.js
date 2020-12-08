"use strict";

const app = new Vue( {
    el: '#app',
    data: {
        isOkay: true,
    },
    methods: {
        getJson(url) {
            return fetch(url).then(result => result.json()).catch(error => {console.log(error); this.isOkay = false})
        },
        addProduct(product) {
            product.quantity++;
        },
        removeProduct(product) {
            product.quantity--;
        },
    },
    
});