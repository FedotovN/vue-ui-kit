<script setup lang="ts">
  import { ref } from 'vue';
  import hexToRGB from './utils/hexToRgba';
  import BaseInput from "./components/Input/BaseInput/BaseInput.vue"
  import BaseRange from "./components/Input/RangeInput/RangeInput.vue";
  import { IColors } from './types/colors';
  import useColor from './composables/useColor';
  const { setColor } = useColor();
  const val = ref(0);
  const targetKey = ref<keyof IColors>('primary');
  const error = ref('');
  const min = ref<number>(0);
  const max = ref<number>(100);
  function onInput(event: Event) {
    const input = (event.target as HTMLInputElement);
    const value = input.value as keyof IColors;
    if (!['primary', 'alert', 'success', 'none', 'secondary'].includes(value)) {
      error.value = 'Input correct color key!';
    }
    else error.value = '';
    targetKey.value = value;
  }
  function onColorInput(event: Event) {
    const input = (event.target as HTMLInputElement);
    const value = hexToRGB(input.value);
    setColor(value, targetKey.value);
  }
  function onRangeInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    val.value = parseInt(value);
  }
</script>
<template>
  <div class="flex w-full p-2 bg-gray-100 h-screen justify-center items-center flex-col gap-4">
    Value: {{ val }}
    <div class="flex gap-2 h-92">
      <input type="color" @input="onColorInput">
    </div>
    <div class="flex gap-2">
      <base-range v-model:min-value="min" v-model:max-value="max"></base-range>
    </div>
  </div>
</template>