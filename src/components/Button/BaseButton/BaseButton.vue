<script setup lang="ts">
    import { computed } from "vue";
    import useColor from "../../../composables/useColor";
    import { IColors } from "../../../types/colors";
    import BaseButtonProps from "@/types/props/Button/BaseButtonProps";
    const { getColor } = useColor();
    const props = withDefaults(defineProps<BaseButtonProps>(), {
        color: 'primary',
        width: 'auto',
    });
    const styles = computed(() => {
        const [red, green, blue] = getColor(props.color as keyof IColors);
        return {
            '--accent-color': `${red}, ${green}, ${blue}`,
            '--force-width': props.width,
        };
    });
</script>
<template>
    <button
        v-bind="$attrs"
        :style="styles"
        :class="`button
        ${fill ? 'w-full': ''}
        ${large ? 'large' : ''}
        ${outlined ? `outlined` : 'border-transparent'}
        ${rounded ? `round` : ''}
        ${raised ? 'raised' : ''}
        ${flat ? `flat bg-transparent` : ''}
        ${!flat && !outlined ? 'default' : ''}
        ${bold ? 'bold' : ''}
        ${caps ? 'caps': ''}
        `">
        <p>
            <slot />
        </p>
    </button>
</template>
<style scoped lang="scss" src="./style.scss" />