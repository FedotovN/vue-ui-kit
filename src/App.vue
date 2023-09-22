<script setup lang="ts">
  import { shallowRef } from "vue";
  import OverlayModalExample from "./OverlayModalExample.vue";
  import OverlayModal from "./components/Modal/OverlayModal/OverlayModal.vue";
  import BaseButton from "./components/Button/BaseButton/BaseButton.vue";
  import useModal from "./composables/useModal";
  const { open, add } = useModal();
  add({
    content: 'Content',
    header: 'Modal window!',
    id: '0',
    component: shallowRef(OverlayModalExample)
  })
  const onClick = () => {
    open('0');
  };
  
</script>
<template>
  <div class="flex">
    <OverlayModal />
    <base-button @click="onClick">Open modal</base-button>
  </div>
</template>
<style scoped lang="scss">
  .flex {
    display: flex;
    gap: 5px;
  }
</style>