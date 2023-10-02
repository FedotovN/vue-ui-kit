<template>
    <div style="padding-bottom: 10px;">
        <OverlayToast vertical-side="bottom" horizontal-side="left" minWidth="600px"></OverlayToast>
        <base-button @click="show">Add toast</base-button>
        <BaseInputVue v-model="toastContent" @keydown.enter="show"></BaseInputVue>
        <input type="color" @input="onColorInput" />
    </div>
</template>

<script setup lang="ts">
    import OverlayToast from './src/components/Toast/OverlayToast/OverlayToast.vue';
    import BaseButton from './src/components/Button/BaseButton/BaseButton.vue';
    import BaseInputVue from './src/components/Input/BaseInput/BaseInput.vue';
    import useToast from "./src/composables/useToast";
    import useColor from './src/composables/useColor';
    import hexToRGB from './src/utils/hexToRgba';
    import { ref } from "vue";
    const { add } = useToast();
    const { setColor } = useColor();
    const show = () => {
    add({ content: toastContent.value || 'Example', color: 'primary', delay: 5000 });
    }
    const toastContent = ref('');
    function onColorInput(event) {
    const input = event.target as HTMLInputElement;
    setColor(hexToRGB(input.value), 'primary')
    }
</script>