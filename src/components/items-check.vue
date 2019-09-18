<template>
    <div class="wrapper-items-check">
        <ul class="list-items">
            <li v-for="order in goods"
            :key="order.id"><span>{{order.name}}</span> <el-button @click="removeItem(order)" type="danger">del</el-button></li>
        </ul>
        <span>Цена: {{totality}} $</span>
        <el-button>Send</el-button>
    </div>
</template>

<script>
    export default {
        computed: {
            goods() {
                return this.$store.state.listCheck.orderInfo;
            },
            totality () {
                return this.$store.getters.computedPrice;
            }
        },
        methods: {
            removeItem (order) {
                return this.$store.commit('removeItemFromOrder', order);
            }
        }
    }

</script>

<style scoped>
    ul {
        margin-top: 0;
    }
</style>