<script setup lang="ts">
import BaseToggleProps from "@/types/props/Forms/BaseToggleProps";
import { useColor } from "@/composables";
import { computed, ref, watch } from "vue";
const emit = defineEmits<{
    (e: `update:modelValue`, value: boolean): void,
}>();
const props = withDefaults(defineProps<BaseToggleProps>(), {
    color: 'none',
})
const propped = computed(() => props.value || props.modelValue);
const localValue = ref(propped.value);
watch(propped, v => {
    localValue.value = v;
})
const style = computed(() => ({
    '--accent-color': useColor().get(props.color),
}));
function onToggle() {
    localValue.value = !localValue.value
    emit('update:modelValue', localValue.value);
}
</script>
<template>
    <div class="base-toggle-wrapper" :style="style">
        <div class="base-toggle-body" @click="onToggle">
            <div :class="`base-toggle-path ${localValue ? 'toggled' : ''}`"></div>
            <div :class="`base-toggle-thumb ${localValue ? 'toggled' : ''}`"></div>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./style.scss" />