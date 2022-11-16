<template>
  <HeaderComponent />
  <CardComponent />
  <SerieComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';
import SerieComponent from './components/SerieComponent.vue';

export default {
  components: {
    HeaderComponent,
    CardComponent,
    SerieComponent
  }

}


</script>
<style lang="scss" scoped>
@use './assets/variables.scss' as *;
@use './assets/general.scss' as *;
</style>