<script setup lang="ts">
import { inject, computed } from "vue";
import useColor from "../../../../composables/useColor";
import AccordionItem from "@/types/props/Accordion/AccordionItem";
import AccordionItemProps from "@/types/props/Accordion/BaseAccordion/AccordionItemProps";
const props = withDefaults(defineProps<AccordionItem & AccordionItemProps>(), {
  color: "primary",
});
const accordionState: AccordionItem[] = inject("accordion-items");
const isOpened = computed(() => {
  return accordionState?.find((item) => item.id === props.id)?.opened;
});
const { getColor } = useColor();
const style = computed(() => ({
  "--accent-color": getColor(props.color).join(", "),
}));
const emit = defineEmits<{
  (event: "toggle", value: string | number);
}>();
</script>
<template>
  <div
    class="accordion-item-wrapper"
    :class="isOpened ? 'opened' : 'closed'"
    :style="style"
    data-testid="base-accordion-item"
  >
    <div
      class="accordion-item-header"
      :class="isOpened ? 'opened' : 'closed'"
      @click="disabled ? null : $emit('toggle', id)"
    >
      <p>{{ title || "*" }}</p>
      <svg
        v-if="!disabled"
        :class="isOpened ? 'opened' : 'closed'"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 45.402 45.402"
        xml:space="preserve"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path
              d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <div class="accordion-item-body">
      <div v-if="$slots.default">
        <slot></slot>
      </div>
      <div v-else>
        <small>Nothing in here.</small>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss" src="./styles.scss" />
