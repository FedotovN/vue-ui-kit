<script setup lang="ts">
  import TransitionWrapperProps from "@/types/props/TransitionWrapperProps";
  import { computed } from "vue";
  const props = withDefaults(defineProps<TransitionWrapperProps>(), {
    duration: .15,
  });
  const styleProperties = computed(() => ({
    '--duration': `${props.duration}s`
  }));
</script>
<template>
  <Transition
    :mode="mode"
    :name="name"
    :style="styleProperties"
  >
    <slot />
  </Transition>
</template>
<style lang="scss" src="./scss/index.scss" />
