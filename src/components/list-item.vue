<template>
    <div>
        <!--<ul class="list-items" v-for="group in groups"
            :key="group.id">
                <h4>{{group.name}}</h4>
                <li v-for="dish in filterDishes(group.id)"
                    :key="dish.id"
                    @click="addItem(dish)">
                    <span>{{dish.name}}</span>
                    <span>Цена {{dish.defaultSalePrice}} &#8381; </span>
                </li>
        </ul>-->
        <el-tabs tab-position="left" style="min-height: 200px;">
            <el-tab-pane
            v-for="group in groups"
            :key="group.id"
            :label="group.name">
                <li v-for="dish in filterDishes(group.id)"
                    :key="dish.id"
                    @click="addItem(dish)">
                    <span>{{dish.name}}</span>
                    <span>Цена {{dish.defaultSalePrice}} &#8381; </span>
                </li>
                </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    export default {

        computed: {
            goods() {
                return this.$store.state.listCheck.orderInfo;
            },
            groups() {
                return this.$store.getters.groupFilter;
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
                        price: item.defaultSalePrice,
                    });
                }
            },

            filterDishes(group) {
                return this.$store.getters.dishFilter(group);
            }
        },
        mounted() {
            this.$http.get('https://data-sibers.firebaseio.com/dish-arr/0/dishes.json')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.$store.state.listItem.dishes = data;
                });
            this.$http.get('https://data-sibers.firebaseio.com/dish-group/productgroups.json')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.$store.state.listItem.group = data;
                });
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