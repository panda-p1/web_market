"use strict";

Vue.component('search', {
    name:'search',
    data() {
        return {
            searchLine: '',
            searchedProducts: [],
        }
    },
    methods: {
        filterGoods() {
            let lineReg = new RegExp(this.searchLine,'i');
            this.searchedProducts = this.$root.$refs.products.products.filter(product => lineReg.test(product.product_name));
        },
    },
    template:
        `
        <div>
            <input type="text" class="search-field" v-model="searchLine">
            <button class="btn-search" type="submit">
                <em class="fas fa-search"></em>
            </button>
        </div>
        
        `,
    beforeUpdate() {
        this.filterGoods();
    }
});