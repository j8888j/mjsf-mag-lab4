export default {
    install: (app) => {
        app.directive('style', {
            beforeMount(el, binding) {
                Object.keys(binding.value).forEach((key) => {
                    el.style[key] = binding.value[key];
                });
            },
        })
    }
}
