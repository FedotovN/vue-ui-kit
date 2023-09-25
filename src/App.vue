<script setup lang="ts">
import BaseButton from './components/Button/BaseButton/BaseButton.vue';
import BaseLoader from './components/Loader/BaseLoader/BaseLoader.vue';
import BaseTooltip from './components/Tooltip/BaseTooltip.vue';
</script>
<template>
  <div class="flex">
    <base-button>
    <base-tooltip>12345678900987654321</base-tooltip>Primary default</base-button>
    <base-button color="alert" flat v-tooltip="'directive works'">Alert flat</base-button>
    <base-button outlined color="secondary">Secondary outlined</base-button>
  </div>
  <div class="flex">
    <base-loader>
    </base-loader>
    <base-loader color="alert"></base-loader>
    <base-loader color="secondary"></base-loader>
  </div>
</template>
<style>
  .flex {
    display: flex;
    gap: 10px;
  }
</style>
