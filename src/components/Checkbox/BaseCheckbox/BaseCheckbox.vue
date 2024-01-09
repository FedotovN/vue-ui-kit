<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseCheckboxProps from "@/types/props/Checkbox/BaseCheckboxProps";
import { useColor } from '@/composables';
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean);
}>();
const props = withDefaults(defineProps<BaseCheckboxProps>(), {
  color: 'primary',
});
const localValue = ref(props.value || props.modelValue || false);
const inputId = `base-checkbox-${Math.random()}`;
const style = computed(() => {
  return {
    '--color': useColor().get(props.color),
  }
});
function onInput(event: InputEvent) {
  const target = event.target as HTMLInputElement;
  const value = target.checked;
  emit('update:modelValue', value);
  localValue.value = value;
}
</script>
<template>
  <div class="base-checkbox" :class="{ disabled }" :style="style">
    <label :for="inputId" v-if="label">{{ label }}</label>
    <div class="checkbox-body" :class="{ checked: localValue }">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
      </svg>
      <input :id="inputId" type="checkbox" :disabled="disabled" :checked="localValue" @change="onInput" />
    </div>
  </div>
</template>
<style scoped src="./style.scss" lang="scss" />