<script setup lang="ts">
import OverlayToast from './components/Toast/OverlayToast/OverlayToast.vue';
import BaseButton from './components/Button/BaseButton/BaseButton.vue';
import useToast from "./composables/useToast";
const { add } = useToast();
const show = () => {
  add({ color: 'alert', content: 'Bla' }, 100000);
}
</script>
<template>
  <div>
    <OverlayToast min-width="250px"></OverlayToast>
    <base-button @click="show">Add toast</base-button>
  </div>
</template>
