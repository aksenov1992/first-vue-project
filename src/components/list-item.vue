<template>
    <ul class="list-items">
        <li v-for="item in items"
            @click="addItem(item)"
            :key="item.id"><span>{{item.name}} - Цена {{item.price}} $ </span><el-button type="primary">add</el-button></li>
    </ul>
</template>

<script>

    export default {

        computed: {
            items() {
                return this.$store.state.listItem.dishes;
            },
            goods() {
                return this.$store.state.listCheck.orderInfo;
            }
        },

        methods: {
            addItem(item) {
                const value = this.goods.findIndex(el => el.id === item.id);

                if (value > -1) {
                    return this.$store.commit('addQuantityItem', value);
                } else {
                    return this.$store.commit('addItemToCheckList', {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                    });
                }
            }
        }
    }

</script>

<style>
    .list-items {
        box-sizing: border-box;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        list-style: none;
        min-width: 300px;
        min-height: 50px;
        border-radius: 4px;
        border: 1px solid #E4E7ED;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;
    }

</style>