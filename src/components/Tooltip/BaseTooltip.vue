<script setup lang="ts">
    import { computed, onMounted, onUnmounted, ref, useAttrs, watch, watchEffect } from "vue";
    import useColor from "../../composables/useColor";
    import BaseTooltipProps from "../../types/props/Tooltip/BaseTooltipProps";
    import tippy, { Instance, Props } from "tippy.js";
    import 'tippy.js/dist/tippy.css';
    const { getColor } = useColor();
    const root = ref<HTMLElement | null>(null);
    const props = withDefaults(defineProps<BaseTooltipProps>(), {
        color: 'none',
        allowHTML: true,
    });
    let inst: Instance<Props>;
    let box: HTMLDivElement;
    let arrow: HTMLDivElement;
    onMounted(() => {
        const parent = root.value.parentElement;
        inst = tippy(parent, {
            content: root.value,
            allowHTML: true,
            ...useAttrs(),
        });
        box = inst.popper.querySelector('.tippy-box') as HTMLDivElement;
        arrow = inst.popper.querySelector('.tippy-arrow') as HTMLDivElement;
    });
    watchEffect(() => {
        const color = `rgba(${getColor(props.color).join(', ')})`;
        box?.style.setProperty('background-color', color, 'important');
        arrow?.style.setProperty('color', color, 'important');
    }, { flush: 'post' });
    onUnmounted(() => inst.destroy() );
</script>
<template>
    <div ref="root">
        <slot />
    </div>
</template>