<script setup lang="ts">
import BaseRadioGroupProps from '@/types/props/Forms/Radio/BaseRadioGroupProps';
import BaseRadio from '../BaseRadio/BaseRadio.vue';
import BaseRadioProps from '@/types/props/Forms/Radio/BaseRadioProps';
import { computed, ref, watch } from 'vue';
import { useColor } from '@/composables';
const emit = defineEmits<{
  (e: 'update:modelValue', value: BaseRadioProps);
}>();
const props = withDefaults(defineProps<BaseRadioGroupProps>(), {
  name: 'group',
});
const propped = computed(() => props.value || props.modelValue);
const localValue = ref(propped.value || null);
watch(propped, (v) => (localValue.value = v));
function onCheck(radio: BaseRadioProps) {
  if (props.disabled) return;
  localValue.value = radio;
  emit('update:modelValue', localValue.value);
}
const style = computed(() => {
  return {
    '--selected-color': useColor().get(localValue.value?.color || 'none'),
  };
});
</script>
<template>
  <div class="base-radio-group" :class="{ disabled }" :style="style">
    <div class="base-radio-group__header" v-if="label">
      <label>{{ label }}</label>
    </div>
    <div class="base-radio-group__main">
      <div class="base-radio-group__radios" :class="{ column: asColumn }">
        <BaseRadio @checked="onCheck(radio)" v-for="radio in items" :name="name"
          :checked="localValue?.value === radio.value" v-bind="{ ...radio }" />
      </div>
    </div>
    <div class="base-radio-group__selected" v-if="localValue && showValue">
      <p>
        Selected:
        <span class="base-radio-group__selected-value">{{
          localValue?.value
        }}</span>
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss" src="./style.scss" />
