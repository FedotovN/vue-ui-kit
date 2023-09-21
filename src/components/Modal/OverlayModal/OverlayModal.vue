<script setup lang="ts">
    import OverlayModalProps from "../../../types/props/Modal/OverlayModalProps";
    import useColor from "../../../composables/useColor";
    import useModal from "../../../composables/useModal";
    import { computed } from "vue";
    const props = withDefaults(defineProps<OverlayModalProps>(), {
        color: 'primary',
        allowHTML: false,
        width: '600px',
    })
    const { modal, close } = useModal();
    const { getColor } = useColor();
    const style = computed(() => ({
        '--accent-color': getColor(props.color).join(', '),
        '--force-width': props.width,
    }));
</script>
<template>
    <Teleport to="body">
        <Transition enter-from-class="start" enter-active-class="active" enter-to-class="enter-end" leave-to-class="start" leave-active-class="active">
            <div class="overlay-modal-wrapper" v-if="modal" @click.stop="close" :style="style">
                <div class="overlay-model-content" @click.stop>
                    <div class="overlay-modal-header">
                        <h3>{{ modal.header }}</h3>
                        <svg @click="close" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8 "></polygon> </g></svg>
                    </div>
                    <div class="overlay-modal-body">
                        <div v-if="allowHTML" v-html="modal.content"></div>
                        <p v-else>{{ modal.content }}</p>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>


<style scoped lang="scss" src="./OverlayModal.scss" />