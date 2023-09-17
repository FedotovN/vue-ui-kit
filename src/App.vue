<script setup lang="ts">
  import { ref } from 'vue';
  import hexToRGB from './utils/hexToRgba';
  import ProgressBar from './components/Loader/ProgressBar/ProgressBar.vue';
  import BaseButton from './components/Button/BaseButton/BaseButton.vue';
  import CircularProgressLoader from "./components/Loader/CircularProgressLoader/CircularProgressLoader.vue";
  import { IColors } from './types/colors';
  import useColor from './composables/useColor';
  const { setColor } = useColor();
  const val = ref(0);
  const targetKey = ref<keyof IColors>('primary');
  function onInput(event: Event) {
    const input = (event.target as HTMLInputElement);
    const value = input.value as keyof IColors;
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
    <div class="flex gap-2">
      <input type="text" @input="onInput">
      <input type="color" @input="onColorInput">
    </div>
    <div class="flex p-2 border rounded shadow w-96 items-center flex-col gap-2">
      <div class="flex gap-2">
        <CircularProgressLoader :min="-500" show-progress :value="val" rounded color="alert" /> 
        <CircularProgressLoader show-progress :value="val" rounded color="success">
        </CircularProgressLoader>
        <CircularProgressLoader :value="val" rounded color="secondary"></CircularProgressLoader>
        <CircularProgressLoader :value="val" rounded color="primary"></CircularProgressLoader>
      </div>
      <div class="flex gap-2">
        <ProgressBar show-progress :value="val" outlined flat color="alert"></ProgressBar>
        <ProgressBar show-progress :value="val" color="secondary"></ProgressBar>
      </div>
      <div class="flex gap-2">
        <BaseButton @click="val -= 20" color="alert" raised>Sub 20</BaseButton>
        <BaseButton @click="val += 10" outlined rounded color="secondary">Add 10</BaseButton>
      </div>
      <div class="flex w-full justify-center py-6">
        <input type="range" @input="onRangeInput" :value="val" class="w-full">
      </div>
    </div>
  </div>
</template>