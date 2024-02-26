<script setup lang="ts">
import { Ref, computed, onMounted, onUnmounted, ref, watch, nextTick } from "vue";
import PopupHelperProps from "@/types/props/Overlay/PopupHelperProps";
import { Unsubscribe } from "@/types/listeners";
import getPopupPosition from "./position";
import listeners from "./listeners";
const emit = defineEmits<{
  (e: 'popped', value: boolean),
}>();
const props = withDefaults(defineProps<PopupHelperProps>(), {
  listenerType: 'hover',
  alignX: 'center',
  alignY: 'center',
  offsetX: 0,
  offsetY: 0,
  screenBoundaryOffset: 0,
  zIndex: 9999,
  delay: () => [0, 200],
  chain: false,
});
const popupIsActive = ref(false);
const chainedPopupIsActive = ref(false);
const propped = computed(() => props.show);
watch(propped, (v) => { popupIsActive.value = v; });
const target: Ref<HTMLElement> = ref(null);
const popup: Ref<HTMLElement> = ref(null);
const listenToEvents = listeners[props.listenerType];
const unsubscribeFromListener: Ref<null | Unsubscribe> = ref(null);
const popupUnsub: Ref<null | Unsubscribe> = ref(null);
function handleListenerEvent(isActive: boolean) {
  popupIsActive.value = isActive;
};
function handleInteractiveListenerEvent(isActive: boolean) {
  if (isActive) return popupIsActive.value = isActive;
  if (popup.value) {
    popupIsActive.value = popup.value.matches(":hover");
    popupUnsub.value?.();
    if (!popupIsActive) return;
    popupUnsub.value = listenToEvents(popup.value, handleListenerEvent);
  }
}
function setChainedPopupValue(isActive: boolean) {
  chainedPopupIsActive.value = isActive;
}
onMounted(() => {
  const callback = props.interactive ? handleInteractiveListenerEvent : handleListenerEvent;
  unsubscribeFromListener.value = listenToEvents(target.value, callback, props.delay);
});
onUnmounted(() => {
  if (unsubscribeFromListener.value) {
    unsubscribeFromListener.value();
  };
  if (popupUnsub.value) {
    popupUnsub.value();
  }
});
const toShowPopup = computed(() => {
  if(!props.chain) return popupIsActive.value;
  return popupIsActive.value || chainedPopupIsActive.value;
});
watch(toShowPopup, v => {
  emit('popped', v);
})
const componentWasMounted = computed(() => !!target.value);
const popupStyleVariables = computed(() => {
  let [x, y] = [0, 0];
  if (componentWasMounted.value && toShowPopup.value && popup.value) {
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
    'left': `${x}px`,
    'top': `${y}px`,
    'z-index': props.zIndex,
  }
});
</script>
<template>
  <div class="popup-helper">
    <div class="popup-helper__target" ref="target">
      <slot name="target" v-bind="{ chainedPopupIsActive, popupIsActive }" />
    </div>
    <Teleport to="body">
      <Transition>
        <div v-if="toShowPopup" class="popup-helper__popup" ref="popup" :style="popupStyleVariables">
          <slot name="popup" v-bind="{ chain: setChainedPopupValue, chainedIsActive: chainedPopupIsActive }" />
        </div>
      </Transition>
      </Teleport>
  </div>
</template>

<style src="./style.scss" /> 