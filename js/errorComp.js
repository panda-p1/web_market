"use strict";
Vue.component('error', {
    name:'error',
    methods: {
        showError() {
            alert('Ошибка при передече данных')
        }
    },
    template:`<div v-if="!this.$root.isOkay">{{showError()}}</div>`
});
