<script setup lang="ts">
    import BaseToggleProps from "../../../types/props/Toggle/BaseToggleProps";
    import { computed } from "vue";
    import useColor from "../../../composables/useColor";
    const { getColor } = useColor();
    const props = withDefaults(defineProps<BaseToggleProps>(), {
        color: 'primary',
    })
    const style = computed(() => ({
        '--accent-color': getColor(props.color).join(', '),
    }));
    const emit = defineEmits<{
        (e:`update:modelValue`, value: boolean): void,
    }>();
    const getLabel = () => {
        return props.modelValue ? props.truthyLabel : props.falsyLabel;
    }
    function onToggle() {
        emit('update:modelValue', !props.modelValue);
    }
</script>
<template>
    <div class="base-toggle-wrapper" :style="style">
        <div class="base-toggle-body" @click="onToggle">
            <div :class="`base-toggle-path ${modelValue ? 'toggled' : ''}`"></div>
            <div :class="`base-toggle-thumb ${modelValue ? 'toggled' : ''}`"></div>
        </div>
        <small :class="`base-toggle-label ${paintLabel && modelValue ? 'colored' : ''}`" v-if="truthyLabel || falsyLabel">{{  getLabel()  }}</small>
    </div>
</template>
<style scoped lang="scss" src="./BaseToggle.scss" />