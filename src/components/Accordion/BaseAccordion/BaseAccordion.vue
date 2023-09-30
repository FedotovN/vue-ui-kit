<script setup lang="ts">
  import { ref, Ref, useSlots, provide } from "vue";
  import { getAccordionItemsFromSlot } from "./script";
  import BaseAccordionProps from "../../../types/props/Accordion/BaseAccordion/BaseAccordionProps";
  import AccordionItem from "../../../types/props/Accordion/AccordionItem";
  const props = withDefaults(defineProps<BaseAccordionProps>(), {
    color: 'primary',
    multiple: true,
  });
  const items: Ref<AccordionItem[]> = ref([]);
  const defaultSlot = useSlots().default;
  const inner = defaultSlot ? defaultSlot({ toggleItem }) : [];
  items.value = getAccordionItemsFromSlot(inner);
  provide('accordion-items', items.value);
  function toggleItem(id: number | string) {
    console.log(items.value.find(item => item.id === id), id);
    const value = items.value.find(item => item.id === id).opened;
    items.value.find(item => item.id === id).opened = !value;
  }
</script>
<template>
  <div class="base-accordion-wrapper">
    <slot v-bind="{ toggleItem }" />
  </div>
</template>
<style scoped lang="scss" src="./styles.scss"/>