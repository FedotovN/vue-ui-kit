<script setup lang="ts">
  import Playground from './Playground.vue';
  import { ref } from "vue";
  import BaseCheckbox from "./components/Checkbox/BaseCheckbox/BaseCheckbox.vue";
  const state = ref(0);
  const secondState = ref(1);
</script>
<template>
  <div class="flex gap-2 justify-center items-center">
    <BaseCheckbox v-model="state" neutral-condition></BaseCheckbox>
    <BaseCheckbox v-model="secondState" neutral-condition color='alert'></BaseCheckbox>
    <BaseCheckbox v-model="state" neutral-condition color="warning"></BaseCheckbox>
    <BaseCheckbox v-model="secondState" neutral-condition color="secondary"></BaseCheckbox>
    <BaseCheckbox v-model="state" neutral-condition color="success"></BaseCheckbox>

  </div>
  <Playground></Playground>
</template>