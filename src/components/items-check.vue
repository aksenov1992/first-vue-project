<template>
    <div class="wrapper-items-check">
        <ul class="list-items">
            <li v-for="order in goods"
            :key="order.id"><span>{{order.name}}</span> <span>кол-во {{order.quantity}}</span><el-button @click="removeItem(order)" type="danger">del</el-button></li>
        </ul>
        <span>Цена: {{totality}} &#8381;</span>
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

    .wrapper-items-check {
        padding-right: 10px;
        display: flex;
        flex-direction: column;
    }
</style>