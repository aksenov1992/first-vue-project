<template>
  <div class="wrapper">
    <div class="wrapper-items-client">
      <listClient/>
      <listItem/>
    </div>
    <el-button>Add Item</el-button>
    <div class="wrapper-items-check">
      <itemsCheck/>
      <span>Сумма: ХХХ руб.</span>
      <el-button @click="loadList">Send</el-button>
    </div>
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
  },
  data () {
    return {
      loaddata: []
    }
  },
  methods: {
    loadList () {
      this.$http.get('http://x.ksh.ru:9876/getKDS_bydishes')
          .then(response => {
            console.log(response.body);
              return response.json()
          })
              .then(body => {
                this.loaddata = body;
              })
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #E4E7ED;
    border-radius: 4px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .wrapper-items-check {
    padding-right: 10px;
    display: flex;
    flex-direction: column;
  }
</style>
