<script setup lang="ts">
import { useColor } from '@/composables';
import BaseBadgeProps from '@/types/props/Badge/BaseBadgeProps';
import { computed } from 'vue';
const props = withDefaults(defineProps<BaseBadgeProps>(), {
  color: 'none',
  size: 'medium',
});
const style = computed(() => ({
  '--color': useColor().get(props.color),
}));
</script>
<template>
  <div
    class="base-badge"
    :class="{ [size]: true, rounded, outlined, filled, bold, caps }"
    :style="style"
  >
    <slot />
  </div>
</template>

<style scoped src="./style.scss" lang="scss" />
