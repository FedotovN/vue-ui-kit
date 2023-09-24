<script setup lang="ts">
    import useModal from "../../../composables/useToast";
    import OverlayToastProps from "../../../types/props/Toast/OverlayToastProps";
    import ToastNotification from "../ToastNotification/ToastNotification.vue";
    withDefaults(defineProps<OverlayToastProps>(), {
        horizontalSide: 'right',
        verticalSide: 'top',
        minWidth: '100px',
        maxWidth: '100%',
    });
    const { toasts, remove } = useModal();
</script>
<template>
    <Teleport to="body">
        <div class="overlay-toast-wrapper">
            <div :class="`overlay-toast-container ${horizontalSide} ${verticalSide}`">
                <TransitionGroup name="toast-notification-transition">
                    <toast-notification v-for="toast in toasts" :toast="toast" :key="`toast-${toast.id}`" @click="remove(toast.id)" :max-width="maxWidth" :min-width="minWidth"></toast-notification>
                </TransitionGroup>
            </div>
        </div>
    </Teleport>
</template>
<style scoped lang="scss" src="./styles.scss" />