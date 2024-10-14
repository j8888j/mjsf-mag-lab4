export default {
  beforeMount(el, binding) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.style.position = 'absolute';
    tooltip.style.zIndex = '1000';
    tooltip.style.visibility = 'hidden';
    tooltip.style.backgroundColor = '#555';
    tooltip.style.color = '#fff';
    tooltip.style.textAlign = 'center';
    tooltip.style.borderRadius = '6px';
    tooltip.style.padding = '5px 10px';
    tooltip.style.whiteSpace = 'nowrap';
    
    if (binding.value.html) {
      tooltip.innerHTML = binding.value.content;
    } else {
      tooltip.textContent = binding.value.content;
    }
    
    document.body.appendChild(tooltip);

    const showTooltip = (event) => {
      tooltip.style.visibility = 'visible';
      tooltip.style.top = `${event.clientY + 10}px`;
      tooltip.style.left = `${event.clientX + 10}px`;
    };

    const hideTooltip = () => {
      tooltip.style.visibility = 'hidden';
    };

    const handleTrigger = (event) => {
      if (binding.value.trigger.includes('hover')) {
        if (event.type === 'mouseenter') showTooltip(event);
        if (event.type === 'mouseleave') hideTooltip();
      }
      if (binding.value.trigger.includes('click')) {
        showTooltip(event);
        el.addEventListener('mouseleave', hideTooltip);
      }
      if (binding.value.trigger.includes('focus')) {
        showTooltip(event);
      }
    };

    const delay = binding.value.delay || 0;

    binding.value.trigger.split(' ').forEach((trigger) => {
      el.addEventListener(trigger, (event) => {
        if (binding.value.show) {
          setTimeout(() => handleTrigger(event), delay);
        }
      });
    });

    el._tooltip = tooltip;
  },
  unmounted(el) {
    document.body.removeChild(el._tooltip);
    delete el._tooltip;
  }
};
