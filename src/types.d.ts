import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
    // Declare your own property on the instance type
    interface ComponentCustomProperties {
        $translate: function;
    }
}
