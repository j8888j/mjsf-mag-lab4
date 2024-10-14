<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navigation from "@/components/Navigation.vue";
</script>

<script>
import OptionsComponent from './OptionsComponent.vue';
import CompositionComponent from './CompositionComponent.vue';

export default {
  data() {
    return {
      data: ''
    };
  },
  mounted() {
    this.serviceProvider = this.$serviceProvider.getData();
  },
  components: {
    OptionsComponent,
    CompositionComponent
  }
}
</script>

<template>
  <header>
    <Navigation />
  </header>
  <RouterView />
  <OptionsComponent />
  <CompositionComponent />
</template>

<style scoped>

</style>
