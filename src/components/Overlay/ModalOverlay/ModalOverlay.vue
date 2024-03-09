<script setup lang="ts">
import ModalOverlayProps from "@/types/props/Overlay/ModalOverlay/ModalOverlayProps";
import TransitionWrapper from "@/components/Transitions/TransitionWrapper.vue";
import useColor from "../../../composables/useColor";
import useModal from "../../../composables/useModal";
import { computed, ref } from "vue";
const props = withDefaults(defineProps<ModalOverlayProps>(), {
  color: 'alert',
  allowHTML: false,
  defaultWidth: '300px',
  transition: 'modal-pop',
})
const modalDOMNode = ref(null);
const componentOnlyDOMNode = ref(null);
const { modal, close } = useModal();
const { get } = useColor();
const style = computed(() => ({
  '--accent-color': get(props.color),
  '--force-width': modal.value.width || props.defaultWidth,
}));
const toShowModal = computed(() => modal.value);
function handleClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const targetInModal = modalDOMNode.value?.contains(target);
  const targetIsComponent = componentOnlyDOMNode.value?.contains(target);
  if (targetInModal || targetIsComponent) return;
  close();
}
</script>
<template>
  <Teleport to="body">
    <TransitionWrapper :name="transitionName" :duration=".1">
      <div class="overlay-modal-wrapper" v-if="toShowModal" @click="handleClick" :style="style">
        <div class="overlay-modal">
          <div class="overlay-modal-component-only" ref="componentOnlyDOMNode" v-if="modal.component && modal.componentOnly">
            <component :is="modal.component" v-bind="modal.props || {}" v-on="modal.emits || {}"  />
          </div>
          <div class="overlay-modal-content" v-else ref="modalDOMNode">
            <div class="overlay-modal-header">
              <button class="overlay-modal-header__close-button" @click.stop="close">
                <svg version="1.1" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="5px" height="5px" id="icon-bound" fill="none"></rect> <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8 "></polygon> </g></svg>
              </button>
            </div>
            <div class="overlay-modal-body">
              <component v-if="modal.component" :is="modal.component" v-bind="modal.props || {}" v-on="modal.emits || {}" />
              <div v-else-if="allowHTML" v-html="modal.content"></div>
              <p v-else>{{ modal.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  </Teleport>
</template>

<style lang="scss" src="./styles.scss" />
