<script setup lang="ts">
import { computed, ref, watch, Ref, onMounted } from 'vue';
import { useColor } from '@/composables';
import RangeInputProps, {
  type RangeInputValue,
} from '@/types/props/Input/RangeInputProps';
const inputId = `slider-input-id-${Math.random()}`;
const emit = defineEmits<{
  (e: 'update:modelValue', value: RangeInputValue);
}>();
const props = withDefaults(defineProps<RangeInputProps>(), {
  color: 'none',
  min: 0,
  max: 100,
  step: 1,
  width: '100%',
  minRange: 1,
});
onMounted(() => {
  localValue.value.from = validateRange(localValue.value.from);
  localValue.value.to = validateRange(localValue.value.to, true);
  localValue.value.from = validateBoundaries(localValue.value.from);
  localValue.value.to = validateBoundaries(localValue.value.to);
});
const propped = computed(() => props.modelValue || props.value);
watch(propped, (v) => (localValue.value = v));
const localValue = ref(
  props.value || props.modelValue || { from: props.min, to: props.max }
) as Ref<RangeInputValue>;
const style = computed(() => {
  return {
    '--color': useColor().get(props.color),
    '--force-width': props.width,
    '--left-fill-padding': `${getFillPercentage(localValue.value.from)}%`,
    '--right-fill-padding': `${getFillPercentage(getFillPercentage(localValue.value.to, true))}%`,
  };
});
function getFillPercentage(value: number, isSecondInput?: boolean) {
  if (isSecondInput) {
    return ((+props.max - value) / +props.max) * 100;
  } else {
    return (value / +props.max) * 100;
  }
}
function validateRange(value: number, isSecondInput?: boolean) {
  if (isSecondInput) {
    const toCompare = localValue.value.from + +props.minRange;
    return value < toCompare ? toCompare : value;
  } else {
    const toCompare = localValue.value.to - +props.minRange;
    return value > toCompare ? toCompare : value;
  }
}
function validateBoundaries(value: number): number {
  if (props.minimum && value < +props.minimum) return +props.minimum;
  if (props.limit && value > +props.limit) return +props.limit;
  return value;
}
function onInput(event: InputEvent, isSecondInput?: boolean) {
  const target = event.target as HTMLInputElement;
  target.value = validateRange(+target.value, isSecondInput).toString();
  target.value = validateBoundaries(+target.value).toString();
  if (isSecondInput) {
    localValue.value.to = +target.value;
  } else {
    localValue.value.from = +target.value;
  }
  emit('update:modelValue', localValue.value);
}
</script>
<template>
  <div class="range-input__wrapper" :style="style">
    <label v-if="label" :for="inputId">{{ label }}</label>
    <div class="range-input">
      <input
        type="range"
        class="range-input__input"
        :value="localValue.from"
        @input="onInput"
        :max="max"
        :min="min"
        :id="inputId"
        :step="step"
      />
      <input
        type="range"
        class="range-input__input second"
        :value="localValue.to"
        :max="max"
        :min="min"
        :step="step"
        @input="onInput($event as InputEvent, true)"
      />
      <div class="range-input__path">
        <div class="range-input__fill"></div>
        <div class="range-input__slow-fill"></div>
      </div>
    </div>
  </div>
</template>
<style scoped src="./style.scss" lang="scss" />
