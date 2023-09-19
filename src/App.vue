<script setup lang="ts">
  import { ref } from 'vue';
  import hexToRGB from './utils/hexToRgba';
  import BaseInput from "./components/Input/BaseInput/BaseInput.vue"
  import BaseButton from './components/Button/BaseButton/BaseButton.vue';
  import BaseRange from "./components/Input/RangeInput/RangeInput.vue";
  import { IColors } from './types/colors';
  import useColor from './composables/useColor';
import CircularProgressLoader from './components/Loader/CircularProgressLoader/CircularProgressLoader.vue';
  const { setColor } = useColor();
  const value = ref('');
  const targetKey = ref<keyof IColors>('primary');
  const min = ref<number>(0);
  const max = ref<number>(100);
  function onColorInput(event: Event) {
    const input = (event.target as HTMLInputElement);
    const value = hexToRGB(input.value);
    setColor(value, targetKey.value);
  }
</script>
<template>
  <div class="flex w-full p-2 bg-gray-100 h-screen justify-center items-center flex-col gap-4">
    <div class="flex gap-2 h-92">
      <input type="color" @input="onColorInput">
    </div>
    <div class="my-2 flex items-center justifyx-center gap-2">
      <CircularProgressLoader :value="min" rounded="" show-progress color="primary" width="45px"></CircularProgressLoader>
      <base-range v-model:min-value="min" v-model:max-value="max"></base-range>
      <CircularProgressLoader :value="max" rounded="" show-progress color="alert" width="45px"></CircularProgressLoader>
    </div>
    <div class="my-2 flex items-center justifyx-center gap-2">
      <base-input width="225px" description="Enter value for operand bigger than 5" placeholder="Value" :error-message="+value <= 5 ? 'Enter bigger value' : ''" v-model="value" type="number" />
    </div>
    <div class="mt-2 flex items-center justify-center gap-2">
      <base-button @click="max += +value">Add to max</base-button>
      <base-button @click="max -= +value" color="alert">Substract from max</base-button>
    </div>
    <div class="flex items-center justify-center gap-2">
      <base-button @click="min -= +value" color="alert">Substract from min</base-button>
      <base-button @click="min += +value">Add to min</base-button>
    </div>
    <div class="flex gap-2">
    </div>
  </div>
</template>