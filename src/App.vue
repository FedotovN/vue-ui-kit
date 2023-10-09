<script setup lang="ts">
import { ref } from 'vue';
import BaseDropdown from './components/Dropdown/BaseDropdown/BaseDropdown.vue';
const items = ref([
    { id: 0, label: '123', value: 123 },
    { id: 1, label: '321', value: 123 },
    { id: 2, label: '321', value: 123 },
])
const value = ref(items.value[0]);
const second = ref(items.value[0]);
</script>
<template>
    <div style="padding: 5px; display: flex; align-items: end; justify-content: center; height: 200vh; gap: 5px;">
        <base-dropdown color='alert' :items="items" v-model="value" alignment="left" ></base-dropdown>
        <base-dropdown color='alert' :items="items" v-model="value" alignment="top" ></base-dropdown>
        <base-dropdown color='alert' :items="items" v-model="value" alignment="bottom" ></base-dropdown>
        <base-dropdown color='alert' :items="items" v-model="value" alignment="right" ></base-dropdown>
    </div>
</template>