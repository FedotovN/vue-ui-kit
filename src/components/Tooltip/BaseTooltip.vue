<script setup lang="ts">
    import { onMounted, ref, useAttrs } from "vue";
    import tippy from "tippy.js";
    import 'tippy.js/dist/tippy.css';
    const root = ref<HTMLElement | null>(null);
    onMounted(() => {
        const parent = root.value.parentElement;
        tippy(parent, {
            content: root.value,
            allowHTML: true,
            ...useAttrs(),
        });
    });
</script>
<template>
    <div ref="root">
        <slot />
    </div>
</template>