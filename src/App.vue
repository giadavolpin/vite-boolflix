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
import store from './store';

export default {
  components: {
    HeaderComponent,
    CardComponent,
    SerieComponent
  },
  data() {
    return {

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