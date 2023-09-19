<script setup lang="ts">
  import { computed, toRefs } from "vue";
  import { normalize, getIntends } from "./script";
  import BaseRangeProps from '../../../types/props/Input/RangeInputProps';
  import useColor from "../../../composables/useColor";
  const { getColor } = useColor();
  const props = withDefaults(defineProps<BaseRangeProps>(), {
    limit: 100,
    minimum: 0,
    minValue: 0,
    minimalRange: 5,
    step: 5,
    color: 'primary',
    width: '100%',
  });
  const { limit, minValue, maxValue, minimalRange } = toRefs(props);
  const style = computed(() => {
    const intends = getIntends(minValue.value, maxValue.value, limit.value);
    const color = getColor(props.color).join(', ');
    return {
      '--accent-color': color,
      '--left-intend-progress': `${intends[0]}%`,
      '--right-intend-progress': `${intends[1]}%`,
      '--force-width': props.width,
    }
  });
  const emit = defineEmits<{
    (e:`update:minValue` | `update:maxValue`, value: number): void,
  }>();
  function onInput(e: Event, side: 'min' | 'max'){
    const input = e.target as HTMLInputElement
    let value = parseInt(input.value);
    if(Number.isNaN(value)) value = 0;
    input.value = (normalize(minValue?.value!, maxValue?.value!, value, side, minimalRange.value)).toString();
    emit(`update:${side}Value`, parseInt(input.value));
  }
</script>
<template>
  <div class="range-input-wrapper" :style="style">
    {{ maxValue }}
    <div class="range-input-body">
      <div class="range-input-path">
        <div class="range-input-progress"></div>
      </div>
        <input type="range" class="range-input" :value="props.minValue" @input="e => onInput(e, 'min')" :step="step">
        <input type="range" class="range-input" :value="props.maxValue" @input="e => onInput(e, 'max')" :step="step">
    </div>
  </div>
</template> 
<style lang="scss" scoped src="./styles.scss" />