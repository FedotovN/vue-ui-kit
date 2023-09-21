<script setup lang="ts">
  import Playground from './Playground.vue';
  import { ref } from "vue";
  import BaseCheckbox from "./components/Checkbox/BaseCheckbox/BaseCheckbox.vue";
  const state = ref(true);
  const secondState = ref(true);
</script>
<template>
  <div class="flex gap-2 justify-center items-center">
    <BaseCheckbox v-model="state" neutral-condition></BaseCheckbox>
    <BaseCheckbox v-model="secondState" neutral-condition color='alert' rounded outlined></BaseCheckbox>
    <BaseCheckbox v-model="state" neutral-condition color="warning"></BaseCheckbox>
    <BaseCheckbox v-model="secondState" neutral-condition color="secondary" outlined></BaseCheckbox>
    <BaseCheckbox v-model="state" neutral-condition color="success"></BaseCheckbox>

  </div>
  <Playground></Playground>
</template>