<script setup lang="ts">
import { computed } from 'vue';
import useColor from '../../../composables/useColor';
import BaseButtonProps from '@/types/props/Button/BaseButtonProps';
const props = withDefaults(defineProps<BaseButtonProps>(), {
  color: 'none',
  width: 'auto',
  size: 'medium',
});
const styles = computed(() => {
  return {
    '--color': useColor().get(props.color),
    '--force-width': props.width,
  };
});
</script>
<template>
  <button
    v-bind="$attrs"
    :style="styles"
    class="base-button"
    :class="{
      raised,
      flat,
      outlined,
      rounded,
      disabled,
      [size]: true,
    }"
  >
    <slot />
  </button>
</template>
<style scoped lang="scss" src="./style.scss" />
