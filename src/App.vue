<script setup lang="ts">
  import { shallowRef, ref } from "vue";
  import OverlayModalExample from "./OverlayModalExample.vue";
  import OverlayModal from "./components/Modal/OverlayModal/OverlayModal.vue";
  import BaseButton from "./components/Button/BaseButton/BaseButton.vue";
  import BaseToggle from "./components/Toggle/BaseToggle/BaseToggle.vue";
  import useModal from "./composables/useModal";
  const { open, add } = useModal();
  const val = ref(true);
  add({
    header: 'Modal window!',
    id: '0',
    width: '500px',
    component: shallowRef(OverlayModalExample)
  })
  const onClick = () => {
    open('0');
  };
  
</script>
<template>
  <div class="flex">
    <OverlayModal default-width="" />
    <base-button @click="onClick" flat>Open modal</base-button>
    <base-toggle v-model="val" paint-label truthy-label="True" falsy-label="False"></base-toggle>
  </div>
</template>
<style scoped lang="scss">
  .flex {
    display: flex;
    gap: 5px;
  }
</style>