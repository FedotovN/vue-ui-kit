<script setup lang="ts">
import BaseTabsItemProps from "../../../../types/props/Tabs/BaseTabs/BaseTabsItemProps";
const emit = defineEmits<{
  (e: "toggle");
}>();
const props = withDefaults(defineProps<BaseTabsItemProps>(), {
  color: "primary",
  disabled: false,
});
</script>
<template>
  <slot />
</template>

<style scoped lang="scss" />
