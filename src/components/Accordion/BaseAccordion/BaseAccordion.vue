<script setup lang="ts">
import { ref, Ref, useSlots, provide, computed } from "vue";
import useColor from "../../../composables/useColor";
import { getAccordionItemsFromSlot } from "./script";
import BaseAccordionProps from "@/types/props/Accordion/BaseAccordion/BaseAccordionProps";
import AccordionItem from "../../../types/props/Accordion/AccordionItem";
const { getColor } = useColor();
const props = withDefaults(defineProps<BaseAccordionProps>(), {
  color: "primary",
  width: "400px",
  multiple: true,
});
const items: Ref<AccordionItem[]> = ref([]);
const defaultSlot = useSlots().default;
const inner = defaultSlot ? defaultSlot({ toggleItem }) : [];
items.value = getAccordionItemsFromSlot(inner);
provide("accordion-items", items.value);
function toggleItem(id: number | string) {
  if (!props.multiple) {
    items.value.forEach((item) =>
      item.id !== id ? (item.opened = false) : null,
    );
  }
  const value = items.value.find((item) => item.id === id)?.opened;
  items.value.find((item) => item.id === id).opened = !value;
}
const style = computed(() => ({
  "--accent-color": getColor(props.color).join(", "),
  "--force-width": props.width,
}));
</script>
<template>
  <div class="base-accordion-wrapper" :style="style">
    <slot v-bind="{ toggleItem }" />
  </div>
</template>
<style scoped lang="scss" src="./styles.scss" />
