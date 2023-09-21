<script setup lang="ts">
    import { computed } from "vue";
    import useColor from "../../../composables/useColor";
    import BaseCheckboxProps from "../../../types/props/Checkbox/BaseCheckboxProps";

    const { getColor } = useColor();
    const props = withDefaults(defineProps<BaseCheckboxProps>(), {
        color: 'primary',
        size: '16px',
    });
    const emit = defineEmits<{
        (e: 'update:modelValue', value: boolean),
    }>();
    const style = computed(() => ({
        '--accent-color': getColor(props.color).join(', '),
        '--size': props.size,
    }));
    function onChange() {
        emit('update:modelValue', !props.modelValue);
    }
</script>
<template>
    <div :class="`base-checkbox-wrapper ${modelValue ? 'checked' : ''} ${rounded ? 'rounded' : ''} ${outlined ? 'outlined' : ''}`" :style="style" @click="onChange">
        <div :class="`base-checkbox-svg-container ${modelValue ? 'checked' : ''}`">
            <svg v-if="modelValue" class="active" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-7.84 -7.84 94.05 94.05" xml:space="preserve" stroke="white" stroke-width="0.0007836900000000001" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="white" stroke-width="0.156738"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z"></path> </g> </g></svg>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./styles.scss" />