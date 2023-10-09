<script setup lang="ts">
  import { computed, nextTick, ref, } from 'vue';
  import useColor from '../../../composables/useColor';
  import BaseDropdownProps, { DropdownItem } from "../../../types/props/Dropdown/BaseDropdownProps";
  import getScreenIntersectionDifference from "../../../utils/screenIntersectionDifference";
  const { getColor } = useColor();
  const emit = defineEmits<{
    (e: 'update:modelValue', value: DropdownItem)
  }>();
  const props = withDefaults(defineProps<BaseDropdownProps>(), {
    color: 'primary',
    alignment: 'bottom',
    width: '225px',
  });
  const style = computed(() => ({
    '--accent-color': getColor(props.color).join(', '),
    '--vertical-offset': offset.value.vertical + 'px',
    '--horizontal-offset': offset.value.horizontal + 'px',
    '--width': props.width,
  }));
  const isShown = ref(false);
  const body = ref(null);
  const root = ref(null);
  const offset = ref({ vertical: 0, horizontal: 0 });
  const clickHandler = (event: PointerEvent) => {
      if (!(root.value === event.target || root.value.contains(event.target))) 
      toggleDropdown(false);
  };
  function onClick(item) {
    if (item.disabled) return;
    emit('update:modelValue', item);
    toggleDropdown(false);
  }
  function toggleDropdown(value?) {
    isShown.value = value !== undefined ? value : !isShown.value;
    if (isShown.value) {
      offset.value = { vertical: 0, horizontal: 0 };
      document.addEventListener('click', clickHandler);
      nextTick(() => {
        const o = getScreenIntersectionDifference(body.value);
        const normalize = (val, offset?) => val + (offset || 0) || 0;
        offset.value.vertical = normalize(o.bottom - 5) - normalize(o.top - 5);
        offset.value.horizontal = normalize(o.left - 5) - normalize(o.right - 25);
      })
    } else { 
      document.removeEventListener('click', clickHandler);
    }
  }
</script>
<template>
  <div class="base-dropdown-wrapper" :class="{ opened: isShown }"  :style="style" ref="root">
    <div class="base-dropdown-field" @click="toggleDropdown()">
      <small>{{ modelValue.label }}</small>
      <svg :class="{ opened: isShown }" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
    </div>
    <Transition enter-from-class="start" enter-active-class="active" enter-to-class="enter-end" leave-to-class="leave-to" leave-active-class="active">
      <div class="base-dropdown-body" :class="alignment" v-if="isShown" ref="body">
        <div class="base-dropdown-item" :class="{ disabled: item.disabled }" v-for="item in items" :key="item.id" @click.stop="onClick(item)">
          <small>{{ item.label }}</small>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style scoped lang="scss" src="./styles.scss" />