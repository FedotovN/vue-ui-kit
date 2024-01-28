<script setup lang="ts">
import { useColor } from '@/composables';
import SliderInputProps from '@/types/props/Forms/SliderInputProps';
import { computed, onMounted, ref, watch } from 'vue';
const inputId = `slider-input-id-${Math.random()}`;
const emit = defineEmits<{
  (e: 'update:modelValue', value: number);
}>();
const props = withDefaults(defineProps<SliderInputProps>(), {
  color: 'none',
  width: '100%',
  min: 0,
  max: 100,
  step: 1,
});
const propped = computed(() => props.modelValue || props.value);
watch(propped, (v) => (localValue.value = v));
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
  return {
    '--color': useColor().get(props.color),
    '--force-width': props.width,
    '--fill-percentage': `${(+localValue.value / +props.max) * 100}%`,
  };
});
</script>
<template>
  <div class="slider-input__wrapper">
    <label :for="inputId">{{ label }}</label>
    <div class="slider-input">
      <div class="slider-input__body" :class="{ disabled }" :style="style">
        <input :disabled="disabled" :id="inputId" :step="step" :max="max" :min="min" :value="localValue" @input="onUpdate"
          type="range" class="slider-input__input" />
        <div class="slider-input__path">
          <div class="slider-input__fill"></div>
          <div class="slider-input__slow-fill"></div>
        </div>
      </div>
      <slot name="value" v-bind="{ value: localValue }" />
    </div>
  </div>
</template>
<style scoped src="./style.scss" />
