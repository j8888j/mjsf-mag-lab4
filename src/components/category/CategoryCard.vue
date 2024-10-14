<script setup lang="ts">
import type {CategoryCartProps} from "@/components/category/types";
withDefaults(defineProps<CategoryCartProps>(), {
    item: null
});
</script>

<template>
    <div class="bg-white shadow-md rounded-lg p-4">
        <router-link :to="`/category/${item.id}`">
            <figure>
                <img class="aspect-square" :src="item.image" :alt="item.name"/>
                <figcaption class="font-semibold text-center py-2">{{ item.name }}</figcaption>
            </figure>
        </router-link>
    </div>
</template>

<style scoped>

</style>
