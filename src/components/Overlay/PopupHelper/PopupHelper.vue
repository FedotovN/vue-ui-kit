<script setup lang="ts">
import { Ref, computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import PopupHelperProps from "@/types/props/Overlay/PopupHelperProps";
import { Unsubscribe } from "@/types/listeners";
import getPopupPosition from "./position";
import listeners from "./listeners";
const props = withDefaults(defineProps<PopupHelperProps>(), {
  listenerType: 'hold',
  alignX: 'center',
  alignY: 'center',
  offsetX: 0,
  offsetY: 0,
  screenBoundaryOffset: 25,
  zIndex: 9999,
});
const showPopup = ref(false);
const propped = computed(() => props.show);
watch(propped, (v) => { showPopup.value = v; });
const target: Ref<HTMLElement> = ref(null);
const popup: Ref<HTMLElement> = ref(null);
const listenToEvents = listeners[props.listenerType];
const unsubsribeFromListener: Ref<null | Unsubscribe> = ref(null);
const popupUnsub: Ref<null | Unsubscribe> = ref(null);
function handleListenerEvent(isActive: boolean) {
  showPopup.value = isActive;
};
function handleHoverListenerEvent(isActive: boolean) {
  if (isActive) {
    showPopup.value = isActive;
  } else {
    const popupIsShown = popup.value;
    if (popupUnsub.value) {
      popupUnsub.value();
    }
    if (popupIsShown) {
      const popupIsHovered = popup.value.matches(":hover");
      showPopup.value = popupIsHovered;
      popupUnsub.value = listenToEvents(popup.value, handleListenerEvent);
    }
  }
}
onMounted(() => {
  showPopup.value = true;
  nextTick(() => {
    const callback = props.listenerType === 'hover' ? handleHoverListenerEvent : handleListenerEvent;
    unsubsribeFromListener.value = listenToEvents(target.value, callback, popup.value);
    showPopup.value = false;
  });
});
onUnmounted(() => {
  if (unsubsribeFromListener.value) {
    unsubsribeFromListener.value();
  };
});
const componentWasMounted = computed(() => !!target.value);
const popupStyleVariables = computed(() => {
  let [x, y] = [0, 0];
  if (componentWasMounted.value && showPopup.value && popup.value) {
    const targetRect = target.value.getBoundingClientRect();
    const popupRect = popup.value.getBoundingClientRect();
    const position = getPopupPosition(
      props.alignX, props.alignY,
      +props.offsetX, +props.offsetY,
      targetRect, popupRect,
      props.screenBoundaryOffset
    );
    x = position.x;
    y = position.y;
  }
  return {
    '--pos-x': `${x}px`,
    '--pos-y': `${y}px`,
    '--popup-z-index': props.zIndex,
  }
});
</script>
<template>
  <div class="popup-helper">
    <div class="popup-helper__target" ref="target">
      <slot name="target" />
    </div>
    <Teleport to="body">
      <Transition>
        <div v-if="showPopup" class="popup-helper__popup" ref="popup" :style="popupStyleVariables">
          <slot name="popup" />
        </div>
      </Transition>
      </Teleport>
  </div>
</template>


<style src="./style.scss" /> 