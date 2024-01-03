<script setup lang="ts">
import { useColor } from '@/composables';
import RangeInputProps from '@/types/props/Input/RangeInputProps';
import { computed, ref, watch } from 'vue';
const emit = defineEmits<{
  (e: 'update:modelValue', value: number);
}>();
const props = withDefaults(defineProps<RangeInputProps>(), {
  color: 'warning',
  width: 'auto',
  min: 0,
  max: 100,
  step: 1,
});
const propped = computed(() => props.modelValue || props.value);
watch(propped, v => localValue.value = v);
const localValue = ref(props.modelValue || props.value || 0);
function onUpdate(event: InputEvent) {
  const { target } = event;
  const { value } = target as HTMLInputElement;
  localValue.value = +value;
  emit('update:modelValue', localValue.value);
}
const style = computed(() => {
  let color;
  if (typeof props.color === 'string')
    color = useColor().get(props.color);
  const [red, green, blue] = color;
  return {
    '--accent-color': `${red}, ${green}, ${blue}`,
    '--force-width': props.width,
    '--fill-percentage': `${(localValue.value / props.max) * 100}%`
  }
})
</script>
<template>
  <div class="range-input" :style="style">
    <input :step="step" :max="max" :min="min" :value="localValue" @input="onUpdate" type="range"
      class="range-input__input">
    <div class="range-input__bckg"></div>
  </div>
</template>
<style scoped src="./style.scss" />