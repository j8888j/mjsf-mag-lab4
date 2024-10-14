<template>
  <div>
    <h2>Options API Component</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    this.categoriesService = this.$serviceProvider.getCategoriesService();
  }
};
</script>
