<script setup lang="ts">
import { useColor } from '@/composables';
import BaseRadioProps from '@/types/props/Forms/Radio/BaseRadioProps';
import { computed } from 'vue';
const emit = defineEmits<{
  (e: 'checked');
}>();
const props = withDefaults(defineProps<BaseRadioProps>(), {
  color: 'primary',
});
const inputId = `base-radio-id-${Math.random()}`;
function onInput() {
  emit('checked');
}
const style = computed(() => ({
  '--color': useColor().get(props.color),
}));
</script>
<template>
  <div class="base-radio" :class="{ disabled }" :style="style">
    <label :for="inputId" v-if="label">{{ label }}</label>
    <input type="radio" :disabled="disabled" :checked="checked" :name="name" :id="inputId" :value="value"
      @change="onInput" />
  </div>
</template>
<style scoped src="./style.scss" lang="scss" />
