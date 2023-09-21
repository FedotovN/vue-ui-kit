<script lang="ts" setup>
    import { ref, watch } from 'vue';
  import hexToRGB from './utils/hexToRgba';
  import BaseInput from "./components/Input/BaseInput/BaseInput.vue"
  import BaseButton from './components/Button/BaseButton/BaseButton.vue';
  import BaseRange from "./components/Input/RangeInput/RangeInput.vue";
  import BaseToggle from './components/Toggle/BaseToggle/BaseToggle.vue';
  import ProgressBar from './components/Loader/ProgressBar/ProgressBar.vue';
  import { IColors } from './types/colors';
  import useColor from './composables/useColor';
  import CircularProgressLoader from './components/Loader/CircularProgressLoader/CircularProgressLoader.vue';
  const { setColor } = useColor();
  const value = ref('');
  const error = ref('');
  const targetKey = ref<keyof IColors>('primary');
  const bool = ref(false);
  const min = ref<number>(0);
  const max = ref<number>(100);
  function onColorInput(event: Event) {
    const input = (event.target as HTMLInputElement);
    const value = hexToRGB(input.value);
    setColor(value, targetKey.value);
  }
  watch(() => targetKey.value, value => {
    if(!['primary', 'secondary', 'warning', 'alert', 'success', 'none'].includes(value)) {
      error.value = 'Wrong color key!';
    } else error.value = '';
  });
</script>
<template>
    <div class="flex w-full p-2 bg-gray-100 h-screen justify-center items-center flex-col gap-4">
    <div class="flex gap-2">
      <base-toggle v-model="bool" truthy-label="DAMN" paint-label ></base-toggle>
      <base-toggle v-model="bool" truthy-label="DAMN" paint-label  color="secondary"></base-toggle>
      <base-toggle v-model="bool" truthy-label="DAMN" paint-label  color="warning"></base-toggle>
      <base-toggle v-model="bool" truthy-label="DAMN" paint-label  color="alert"></base-toggle>
      <base-toggle v-model="bool" truthy-label="DAMN" paint-label  color="success"></base-toggle>
    </div>
    <div class="flex gap-2 h-92 items-center">
      <input type="color" @input="onColorInput" :disabled="!!error">
      <base-input placeholder="Color key" :error-message="error" v-model="targetKey"></base-input>
    </div>
    <div class="flex flex-col w-full">
      <progress-bar :value="min" width="400px">
        <template #label="{ percentage }">{{ percentage }}%</template>
      </progress-bar>
      <progress-bar :value="max" width="275px" flat outlined color="alert">
        <template #label="{ value, max }">{{ value }} / {{ max }}</template>
      </progress-bar>
    </div>
    <div class="flex items-center justify-center gap-2 pl-16">
      <CircularProgressLoader :value="min" rounded="" show-progress color="primary" width="45px"></CircularProgressLoader>
      <base-range v-model:min-value="min" v-model:max-value="max" :minimal-range="1"></base-range>
      <CircularProgressLoader :value="max" show-progress color="alert" width="155px" height="155px" stroke-width="2px">
        <template #default="{ percentage }">
          <small>{{ percentage }}%</small>
        </template>
      </CircularProgressLoader>
    </div>
    <div class="my-2 flex items-center justify-center flex-col gap-2">
      <base-input width="225px" description="Enter value for operand bigger than 5" placeholder="Value for operand" :error-message="+value <= 5 ? 'Enter bigger value' : ''" v-model="value" type="number" />
      <div class="flex gap-2">
        <base-input width="225px" placeholder="Actual min value" :value="min" disabled />
        <base-input width="225px" placeholder="Actual max value" :value="max" disabled />
      </div>
    </div>
    <div class="mt-2 flex items-center justify-center gap-2">
      <base-button @click="max += +value">Add to max</base-button>
      <base-button @click="max -= +value" color="alert" flat>Substract from max</base-button>
    </div>
    <div class="flex items-center justify-center gap-2">
      <base-button @click="min -= +value" color="alert" flat>Substract from min</base-button>
      <base-button @click="min += +value">Add to min</base-button>
    </div>
    <div class="flex gap-2">
    </div>
  </div>
</template>