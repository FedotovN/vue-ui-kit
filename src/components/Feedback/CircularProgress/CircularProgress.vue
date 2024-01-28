<script setup lang="ts">
import { computed } from 'vue';
import useColor from '../../../composables/useColor';
import CircularProgressProps from '@/types/props/Feedback/CircularProgressProps';
const props = withDefaults(defineProps<CircularProgressProps>(), {
  color: 'none',
  height: '30px',
  width: '30px',
  strokeWidth: '8px',
  value: 0,
  max: 100,
  min: 0,
});
const clampedValue = computed(() => {
  const percentage = (props.value / props.max) * 100;
  return percentage > 100
    ? 100
    : percentage < props.min
      ? props.min
      : percentage;
});
const style = computed(() => {
  const dasharray = 2 * Math.PI * 50;
  const offset = dasharray * ((100 - clampedValue.value) / 100);
  return {
    '--accent-color': useColor().get(props.color),
    '--force-height': props.height,
    '--force-width': props.width,
    '--percentage': clampedValue.value,
    '--stroke-width': props.strokeWidth,
    '--stroke-dasharray': dasharray,
    '--stroke-dashoffset': offset,
  };
});
</script>
<template>
  <div class="circular-progress-loader-wrapper" :style="style">
    <div class="circular-progress-loader-label">
      <div class="circular-progress-loader-label-default" v-if="!$slots.default && showProgress">
        {{ clampedValue.toFixed(0) }}
      </div>
      <slot :percentage="clampedValue" :value="value" :max="max" />
    </div>
    <svg class="circular-progress-loader" :height="height" :width="width" viewBox="0 0 100 100" version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <circle class="circular-progress-loader-path" cx="50" cy="50" r="47%" />
      <circle :class="`${rounded}`" class="circular-progress-loader-fill" cx="50" cy="50" r="47%"></circle>
    </svg>
  </div>
</template>
<style scoped lang="scss" src="./style.scss" />
