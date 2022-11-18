<template>
  <HeaderComponent />
  <CardComponent />
  <SerieComponent :items="store.movie" />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
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
  watch: {    //come funziona il watch? 
    'store.params.query'(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getMovie();
      }
    }
  },
  methods: {
    getMovie() {
      const apiurl = store.baseUrl + store.endpoint;   //questi li trovi nello store.js
      const params = store.params;
      axios.get(apiurl, { params }).then((res) => {
        store.movie = res.data.results;
      })
    }
  },
  created() {

  }


}

</script>
<style lang="scss" scoped>
@use './assets/variables.scss' as *;
@use './assets/general.scss' as *;
</style>