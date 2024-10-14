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

  <button v-tooltip="{ 
    content: 'Tooltip', 
    html: false,
    delay: 200, 
    trigger: 'hover click', 
    show: true 
  }">
    Click to hover
  </button>

</template>

<style scoped>

</style>
