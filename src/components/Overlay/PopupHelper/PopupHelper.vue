<script setup lang="ts">
import { Ref, computed, onMounted, onUnmounted, ref, watch, nextTick } from "vue";
import PopupHelperProps from "@/types/props/Overlay/PopupHelperProps";
import { PopupLifecycleHookCallback } from "@/types/listeners";
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
  delay: () => [0, 0],
  interactive: false,
  chain: false,
});
const id = Math.random();
const showPopup = ref(false);
const target: Ref<HTMLElement> = ref(null);
const popup: Ref<HTMLElement> = ref(null);
const listenToEvents = listeners[props.listenerType];
const unsubscribeFromListener: Ref<null | Unsubscribe> = ref(null);
const popupUnmountCallbacks: Ref<PopupLifecycleHookCallback[]> = ref([]);
const popupMountCallbacks: Ref<PopupLifecycleHookCallback[]> = ref([]);
function handleListenerEvent(isActive: boolean) {
  if (!isActive) {
    onBeforePopupUnmount();
  }
  showPopup.value = isActive;
  nextTick(() => {
    if (showPopup.value) {
      onPopupMount();
    }
  })
}
function onBeforePopupUnmount() {
  popupUnmountCallbacks.value.forEach(cb => cb(popup.value));
}
function onPopupMount() {
  popupMountCallbacks.value.forEach(cb => cb(popup.value));
}
onMounted(() => {
  unsubscribeFromListener.value = listenToEvents(target.value, handleListenerEvent, {
    interactive: props.interactive,
    onPopupMount: callback => popupMountCallbacks.value.push(callback),
    onBeforePopupUnmount: callback => popupUnmountCallbacks.value.push(callback),
    delay: props.delay,
  });
});
onUnmounted(() => {
  if (unsubscribeFromListener.value) {
    return unsubscribeFromListener.value();
  }
});
watch(showPopup, v => {
  emit('popped', v);
})
const popupStyleVariables = computed(() => {
  let [x, y] = [0, 0];
  if (target.value && popup.value) {
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
      <slot name="target" v-bind="{ showPopup }" />
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
