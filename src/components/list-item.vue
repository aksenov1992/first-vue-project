<template>
    <select class="list-items" multiple>
        <option v-for="item in items"
            :key="item.id">{{item.name}} - Цена {{item.price}} $</option>
    </select>
</template>

<script>

    export default {

        computed: {
            items() {
                return this.$store.state.listItem.dishes;
            }
        },

        methods: {

        }
    }

</script>

<style>
    .list-items {
        box-sizing: border-box;
        padding-top: 10px;
        padding-left: 10px;
        list-style: none;
        width: 217px;
        min-height: 50px;
        border-radius: 4px;
        border: 1px solid #E4E7ED;
    }
</style>