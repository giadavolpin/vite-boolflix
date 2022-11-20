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
  watch: {    //Tiene sotto osservazione delle cose e se cambiano lui lancia una nuova proprietà. 
    'store.params.query'(newVal, oldVal) {    //se cambia qualcosa in store.params.query allora lancia la proprietà
      if (newVal !== oldVal) {
        this.getMovie();
        console.log(newVal)
        console.log(oldVal)
      }
    }
  },
  methods: {
    getMovie() {
      const apiurl = store.baseUrl + store.endPoint;   //questi li trovi nello store.js
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