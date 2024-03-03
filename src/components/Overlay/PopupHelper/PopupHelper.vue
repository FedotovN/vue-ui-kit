<script setup lang="ts">
import { Ref, computed, onMounted, onUnmounted, ref, watch, nextTick } from "vue";
import PopupHelperProps from "@/types/props/Overlay/PopupHelper/PopupHelperProps";
import { PopupLifecycleHookCallback } from "@/types/props/Overlay/PopupHelper/listeners";
import { Unsubscribe } from "@/types/props/Overlay/PopupHelper/listeners";
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
  chainDelay: () => [0, 300],
});
const id = Math.floor(Math.random() * 10**10);

const popupIsActive = ref(false);
const nextIsActive = ref(false);
const target: Ref<HTMLElement> = ref(null);
const popup: Ref<HTMLElement> = ref(null);

const listenerFunction = listeners[props.listenerType];
const unsubscribe: Ref<null | Unsubscribe> = ref(null);

const popupUnmountCallbacks: Ref<PopupLifecycleHookCallback[]> = ref([]);
const popupMountCallbacks: Ref<PopupLifecycleHookCallback[]> = ref([]);

let chainDelayStartTimeout: NodeJS.Timeout, chainDelayEndTimeout: NodeJS.Timeout;
function chain(value: boolean) {
  if (!props.chainDelay) return nextIsActive.value = value;
  clearTimeout(chainDelayStartTimeout);
  clearTimeout(chainDelayEndTimeout);
  if (value) {
    chainDelayStartTimeout = setTimeout(() => {
      nextIsActive.value = value;
    }, props.chainDelay[0]);
  } else {
    chainDelayEndTimeout = setTimeout(() => {
      nextIsActive.value = value;
    }, props.chainDelay[1]);
  }
}
function handleListenerEvent(isActive: boolean) {
  if (!isActive) {
    callUnmountCallbacks();
  }
  popupIsActive.value = isActive;
  nextTick(() => {
    if (popupIsActive.value) {
      callMountCallbacks();
    }
  })
}
function callUnmountCallbacks() {
  popupUnmountCallbacks.value.forEach(cb => cb(popup.value));
}
function callMountCallbacks() {
  popupMountCallbacks.value.forEach(cb => cb(popup.value));
}

onMounted(() => {
  unsubscribe.value = listenerFunction(target.value, handleListenerEvent, {
    interactive: props.interactive,
    onPopupMount: callback => popupMountCallbacks.value.push(callback),
    onBeforePopupUnmount: callback => popupUnmountCallbacks.value.push(callback),
    delay: props.delay,
  });
});
onUnmounted(() => {
  if (unsubscribe.value) {
    return unsubscribe.value();
  }
});

const showPopup = computed(() => {
  if (props.chain)
    return popupIsActive.value || nextIsActive.value
  return popupIsActive.value;
})

watch(showPopup, v => {
  emit('popped', v);
});

const popupStyleVariables = computed(() => {
  let [x, y] = [0, 0];
  if (target.value && popup.value) {
    const targetRect = target.value.getBoundingClientRect();
    const popupRect = popup.value.getBoundingClientRect();
    const position = getPopupPosition(
      props.alignX, props.alignY,
      +props.offsetX, +props.offsetY,
      targetRect, popupRect,
      +props.screenBoundaryOffset
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
      <slot name="target" v-bind="{ popupIsActive }" />
    </div>
    <Teleport to="body">
      <Transition>
        <div v-if="showPopup" class="popup-helper__popup" :data-popup-id="`${id}`" ref="popup" :style="popupStyleVariables">
          <slot name="popup" v-bind="{ chain }" />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style src="./style.scss" />
