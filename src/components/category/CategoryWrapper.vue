<script setup lang="ts">
import type {CategoryWrapperProps} from "@/components/category/types";
import CategoryCard from "@/components/category/CategoryCard.vue";
import CategorySkeleton from "@/components/category/CategorySkeleton.vue";

withDefaults(defineProps<CategoryWrapperProps>(), {
    items: () => [],
    loading: false
});
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <template v-if="!loading">
            <CategoryCard
                    v-for="category in items"
                    :key="category.id"
                    :item="category"
            />
        </template>
        <template v-else>
            <CategorySkeleton v-for="index in 4" :key="index"/>
        </template>
    </div>
</template>
