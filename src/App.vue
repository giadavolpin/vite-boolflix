<template>
  <HeaderComponent />
  <CardComponent />
  <SerieComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';
import SerieComponent from './components/SerieComponent.vue';
import axios from 'axios';
import { store } from './store';  //importo store.js

export default {
  components: {
    HeaderComponent,
    SerieComponent
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovie() {
      const apiurl = store.baseUrl + store.endpoint;
      const params = store.params
      axios.get(apiurl, { params }).then((res) => {
        console.log(res.data.results);
      })
    }
  }

}


</script>
<style lang="scss" scoped>
@use './assets/variables.scss' as *;
@use './assets/general.scss' as *;
</style>