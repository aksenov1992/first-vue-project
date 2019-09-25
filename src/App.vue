<template>
  <div class="wrapper">
    <div class="wrapper-items-client">
      <listClient/>
      <listItem/>
    </div>
      <itemsCheck/>
  </div>
</template>

<script>
import listItem from './components/list-item';
import listClient from './components/list-client';
import itemsCheck from './components/items-check.vue';

export default {

  components: {
    listItem,
    listClient,
    itemsCheck
  }
}
</script>

<style scoped>
  .wrapper {
    font-family: Arial, sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #E4E7ED;
    border-radius: 4px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }

</style>
