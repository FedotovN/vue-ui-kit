<script setup lang="ts">
import OverlayToast from './components/Toast/OverlayToast/OverlayToast.vue';
import ModalExample from './ModalExample.vue';
import BaseButton from './components/Button/BaseButton/BaseButton.vue';
import BaseInputVue from './components/Input/BaseInput/BaseInput.vue';
import useToast from "./composables/useToast";
import useColor from './composables/useColor';
import hexToRGB from './utils/hexToRgba';
import { ref } from "vue";
const { add } = useToast();
const { setColor } = useColor();
const show = () => {
  add({ content: toastContent.value || 'Example', color: 'alert', }, 10000);
}
const toastContent = ref('');
function onColorInput(event) {
  const input = event.target as HTMLInputElement;
  setColor(hexToRGB(input.value), 'primary')
}
</script>
<template>
  <div style="padding-bottom: 10px;">
    <OverlayToast min-width="500px"></OverlayToast>
    <base-button @click="show">Add toast</base-button>
    <BaseInputVue v-model="toastContent" @keydown.enter="show"></BaseInputVue>
    <input type="color" @input="onColorInput" />
  </div>
  <ModalExample />
</template>
