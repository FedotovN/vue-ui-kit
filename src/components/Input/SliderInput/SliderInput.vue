<script setup lang="ts">
import { useColor } from '@/composables';
import SliderInputProps from '@/types/props/Input/SliderInputProps';
import { computed, onMounted, ref, watch } from 'vue';
const emit = defineEmits<{
  (e: 'update:modelValue', value: number);
}>();
const props = withDefaults(defineProps<SliderInputProps>(), {
  color: 'warning',
  width: '100%',
  min: 0,
  max: 100,
  step: 1,
});
const propped = computed(() => props.modelValue || props.value);
watch(propped, v => localValue.value = v);
const localValue = ref(props.modelValue || props.value || 0);
onMounted(() => {
  localValue.value = validateValue(+localValue.value);
});
function validateValue(value: number): number {
  if (props.limit && value > +props.limit) return +props.limit;
  if (props.minimum && value < +props.minimum) return +props.minimum;
  return value;
}
function onUpdate(event: InputEvent) {
  const target = event.target as HTMLInputElement;
  target.value = validateValue(+target.value).toString();
  localValue.value = target.value;
  emit('update:modelValue', +localValue.value);
}
const style = computed(() => {
  let color;
  if (typeof props.color === 'string')
    color = useColor().get(props.color);
  const [red, green, blue] = color;
  return {
    '--accent-color': `${red}, ${green}, ${blue}`,
    '--force-width': props.width,
    '--fill-percentage': `${(+localValue.value / +props.max) * 100}%`
  };
})
</script>
<template>
  <div class="range-input" :style="style">
    <input :step="step" :max="max" :min="min" :value="localValue" @input="onUpdate" type="range"
      class="range-input__input">
    <div class="range-input__path">
      <div class="range-input__fill"></div>
      <div class="range-input__slow-fill"></div>
    </div>
  </div>
</template>
<style scoped src="./style.scss" />