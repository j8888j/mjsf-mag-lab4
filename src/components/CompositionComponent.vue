<template>
  <div>
    <h2>Composition API Component</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const message = ref('');

    onMounted(() => {
      this.categoriesServicee = this.$serviceProvider.getCategoriesService();
    });

    return {
      message
    };
  }
};
</script>
