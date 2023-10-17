<script setup lang="ts">
    import ToastNotificationProps from "../../../../types/props/Toast/ToastNotificationProps";
    import useColor from "../../../../composables/useColor";
    import { computed } from "vue";
    import { ToastData } from "@/types/toast";
    const { getColor } = useColor();
    const props = defineProps<ToastNotificationProps>();
    const style = computed(() => ({
        '--accent-color': getColor(props.toast.color || 'none').join(', '),
        '--min-width': props.minWidth,
        '--max-width': props.maxWidth,
        '--delay': `${props.toast.delay / 1000}s`,
    }));
</script>
<template>
    <div class="toast-notification" :style="style">
        <div class="toast-notification-html" v-if="props.toast.parseHtml" v-html="props.toast.content"></div>
        <div :class="`toast-notification-content ${props.toast.centerText ? 'center-text' : ''}`" v-else>
            <small>{{ (toast as ToastData).content }}</small>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./styles.scss" />