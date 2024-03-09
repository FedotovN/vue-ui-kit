<script setup lang="ts">
import PopupHelper from "@/components/Overlay/PopupHelper/PopupHelper.vue";
import BaseDropdownProps from "@/types/props/Forms/BaseDropdownProps";
import { ref, computed, watch, onMounted } from "vue";
import { useColor } from "@/composables";
const emit = defineEmits<{
  (event: 'update:modelValue', value: object): void,
  (event: 'update', value: object): void,
}>();
const props = withDefaults(defineProps<BaseDropdownProps>(), {
  alignY: 'bottom',
  alignX: 'center',
  offsetY: 5,
  listenerType: 'click',
  labelProperty: 'label',
  label: 'Select an option',
  width: 'auto',
  color: 'none',
});

const localValue = ref(null);

const proppedValue = computed(() => props.value || props.modelValue);
const baseDropdownStyles = computed(() => {
  return {
    '--accent-color': useColor().get(props.color),
    '--force-width': props.width,
  }
});
const hasOptions = computed(() => {
  return props.options && props.options.length;
})
const dropdownLabel = computed(() => {
  if (localValue.value) {
    return localValue.value[props.labelProperty]
  }
  return props.label
});
watch(proppedValue, v => localValue.value = v);
function onUpdate(value: object) {
  localValue.value = value;
  emit('update:modelValue', value);
  emit("update", value);
}
</script>
<template>
  <div class="base-dropdown" :style="baseDropdownStyles">
    <PopupHelper
      dont-teleport
      transition="drop"
      :listener-type="listenerType"
      :align-x="alignX"
      :align-y="alignY"
      :offset-x="offsetX"
      :offset-y="offsetY"
      :interactive="keepOnSelect"
      screen-boundary-offset="5"
    >
      <template #target="{ popupIsActive }">
        <div class="base-dropdown-trigger" :class="{ opened: popupIsActive }">
          <p>{{ dropdownLabel }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        </div>
      </template>
      <template #popup>
        <div class="base-dropdown-options" v-if="hasOptions" :style="baseDropdownStyles">
          <div v-for="option in options" class="base-dropdown-options__option" @click="onUpdate(option)">
            {{ option[labelProperty ]}}
          </div>
        </div>
        <div class="base-dropdown-fallback" v-else>
          <small>No options.</small>
        </div>
      </template>
    </PopupHelper>
  </div>
</template>
<style scoped lang="scss" src="./styles.scss" />
