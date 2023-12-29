<script setup lang="ts">
import { computed } from "vue";
import useColor from "../../../composables/useColor";
import CircularProgressLoaderProps from "@/types/props/Loader/CircularProgressLoaderProps";
const { getColor } = useColor();
const props = withDefaults(defineProps<CircularProgressLoaderProps>(), {
  color: "primary",
  height: "56px",
  width: "56px",
  strokeWidth: "15px",
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
  const [red, green, blue] = getColor(props.color);
  const dasharray = 2 * Math.PI * 50;
  const offset = dasharray * ((100 - clampedValue.value) / 100);
  return {
    "--accent-color": `${red}, ${green}, ${blue}`,
    "--force-height": props.height,
    "--force-width": props.width,
    "--percentage": clampedValue.value,
    "--stroke-width": props.strokeWidth,
    "--stroke-dasharray": dasharray,
    "--stroke-dashoffset": offset,
  };
});
</script>
<template>
  <div class="circular-progress-loader-wrapper" :style="style">
    <div class="circular-progress-loader-label">
      <div
        class="circular-progress-loader-label-default"
        v-if="!$slots.default && showProgress"
      >
        {{ clampedValue.toFixed(0) }}
      </div>
      <slot :percentage="clampedValue" :value="value" :max="max"> </slot>
    </div>
    <svg
      class="circular-progress-loader"
      viewBox="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle class="circular-progress-loader-path" cx="60" cy="60" r="50" />
      <circle
        :class="`${props.rounded ? 'rounded' : ''}`"
        class="circular-progress-loader-fill"
        cx="60"
        cy="60"
        r="50"
      ></circle>
    </svg>
  </div>
</template>
<style scoped lang="scss" src="./style.scss" />
