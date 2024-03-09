<script setup lang="ts">
import BaseInputProps from '@/types/props/Forms/TextInputProps';
import { useColor } from '@/composables';
import { computed, ref, watch } from 'vue';
import { colors } from '@/types/colors';
const inputId = `base-input-id-${Math.random()}`;
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number);
  (e: 'blur', value: string | number);
  (e: 'focusin', value: HTMLInputElement);
  (e: 'focusout', value: HTMLInputElement);
}>();
const props = withDefaults(defineProps<BaseInputProps>(), {
  color: 'none',
  dynamicLabel: false,
});
const propped = computed(() => props.value || props.modelValue);
const localValue = ref(props.value || props.modelValue || '');
watch(propped, (v) => (localValue.value = propped.value));
watch(localValue, (value) => emit('update:modelValue', value));
const onFocusIn = (e: HTMLInputElement) => {
  isFocused.value = true;
  emit('focusin', e);
};
const onFocusOut = (e: HTMLInputElement) => {
  isFocused.value = false;
  emit('focusin', e);
};
const isFocused = ref(!!localValue.value || false);
const toLiftLabel = computed(() => {
  if (!props.dynamicLabel) return false;
  return isFocused.value || localValue.value;
});
const toShowPlaceholder = computed(() => {
  const propped = props.placeholder || '';
  return !props.dynamicLabel || !props.label
    ? propped
    : toLiftLabel.value
      ? propped
      : '';
});
const style = computed(() => {
  return {
    '--color': useColor().get(props.color),
    '--error-color': useColor().get(colors.alert),
    '--force-width': props.width,
  };
});
</script>
<template>
  <div :style="style" class="base-input" :class="{ disabled, error: errorMessage, unstyled }">
    <label v-if="label" :for="inputId" :class="{
      dynamic: dynamicLabel,
      lifted: toLiftLabel,
      focused: isFocused,
    }" class="base-input__label">{{ label }}</label>
    <div class="base-input__body">
      <input :disabled="disabled" :required="required" @blur="emit('blur', localValue)"
        @focusin="onFocusIn($event.target as HTMLInputElement)" @focusout="onFocusOut($event.target as HTMLInputElement)"
        v-model="localValue" class="base-input__input" :id="inputId" :placeholder="toShowPlaceholder.toString()"
        :autocomplete="autocomplete" />
      <span v-if="required">*</span>
    </div>
    <label class="base-input__error-message" :class="{ wrap: errorWrap, focused: isFocused }" v-if="!!errorMessage">{{
      errorMessage }}</label>
  </div>
</template>
<style scoped lang="scss" src="./style.scss" />
