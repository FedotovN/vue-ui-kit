<script setup lang="ts">
import { ref } from 'vue';

const r = ref('');
</script>
<template>
    <div class="main">
        <base-input placeholder="123" v-model="r"></base-input>
    </div>
</template>
<style lang="scss">
.main {
    padding: 5px;
    padding-top: 25px;
}
</style>