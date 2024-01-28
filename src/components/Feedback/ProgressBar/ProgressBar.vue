<script setup lang="ts">
import useColor from '../../../composables/useColor';
import ProgressBarProps from '@/types/props/Feedback/ProgressBarProps';
import { computed } from 'vue';
const props = withDefaults(defineProps<ProgressBarProps>(), {
  value: 0,
  max: 100,
  min: 0,
  props: 0,
  color: 'none',
  width: '125px',
  height: '8px',
});
const clampedValue = computed(() =>
  props.value > props.max
    ? props.max
    : props.value < props.min
      ? props.min
      : props.value
);
const percentage = computed(() =>
  ((clampedValue.value / props.max) * 100).toFixed(0)
);
const styles = computed(() => {
  return {
    '--accent-color': useColor().get(props.color),
    '--percentage': `${percentage.value}%`,
    '--force-width': `${props.fill ? '100%' : props.width}`,
    '--force-height': `${props.large ? '16px' : props.height}`,
  };
});
</script>
<template>
  <div class="progress-bar-wrapper" :style="styles">
    <small class="progress-bar-wrapper-label">
      <small v-if="showProgress && !$slots.default"> {{ percentage }}% </small>
      <slot name="label" :percentage="percentage" :max="max" :value="clampedValue">
      </slot>
    </small>
    <div :class="`
            progress-bar-path
            ${outlined ? 'outlined' : ''}
                                        ${flat ? 'flat' : ''}
        `">
      <div class="progress-bar-fill"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./style.scss" />
