<script setup lang="ts">
  import { ref } from 'vue';
  import hexToRGB from './utils/hexToRgba';
  import ProgressBar from './components/Loader/ProgressBar/ProgressBar.vue';
  import BaseButton from './components/Button/BaseButton/BaseButton.vue';
  import CircularProgressLoader from "./components/Loader/CircularProgressLoader/CircularProgressLoader.vue";
  import BaseInput from "./components/Input/BaseInput/BaseInput.vue"
  import { IColors } from './types/colors';
  import useColor from './composables/useColor';
  const { setColor } = useColor();
  const val = ref(0);
  const targetKey = ref<keyof IColors>('primary');
  const error = ref('');
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
      <BaseInput :value="targetKey" placeholder="Color key" @input="onInput" :error-message="error" description="Type in IColor key!"></BaseInput>  
      <BaseInput></BaseInput>
    </div>
  </div>
</template>