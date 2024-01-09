<script setup lang="ts">
import { useColor } from "@/composables";
import BaseRadioProps from "@/types/props/Radio/BaseRadioProps";
import { ref, watch, computed } from "vue";
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean);
}>();
const props = withDefaults(defineProps<BaseRadioProps>(), {
  color: 'primary',
});
const localValue = ref(props.value || props.modelValue || false);
const propped = computed(() => props.modelValue || props.value);
watch(propped, v => localValue.value = v);
const inputId = `base-radio-id-${Math.random()}`
function onInput(event) {
  const target = event.target as HTMLInputElement;
  localValue.value = target.checked;
  emit('update:modelValue', localValue.value);
}
const style = computed(() => ({
  '--color': useColor().get(props.color)
}))
</script>
<template>
  <div class="base-radio" :class="{ disabled }" :style="style">
    <label :for="inputId" v-if="label">{{ label }}</label>
    <input type="radio" :disabled="disabled" :name="name" :id="inputId" :value="uniqueName" :checked="localValue"
      @change="onInput">
  </div>
</template>
<style scoped src="./style.scss" lang="scss" />