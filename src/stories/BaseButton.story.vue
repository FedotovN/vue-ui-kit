<template>
  <Story title="Base Button">
    <div class="wrapper">
      <BaseButton>Button</BaseButton>
    </div>
  </Story>
</template>

<script setup lang="ts">
import BaseButton from '@/components/Button/BaseButton/BaseButton.vue';
</script>
<style>
.wrapper {
  padding: 5px;
  border: 1px solid #4e4e4e;
}
</style>