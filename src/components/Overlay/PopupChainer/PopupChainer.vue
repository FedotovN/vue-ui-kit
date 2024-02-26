<template>
  <slot v-bind="{ }" />
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const linkedList = ref({})
  function get(nodeId: string): boolean {
    const node = linkedList.value[nodeId];
    if (node.value) return true;
    const { next } = node;
    if (!next) return false;
    return get(next.id);
  }
  function set(nodeId: string, value: boolean, next?: string) {
    const node = linkedList.value[nodeId];
    linkedList.value[nodeId] = { value, next };

  }
</script>
