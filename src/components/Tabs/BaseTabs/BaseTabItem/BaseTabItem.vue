<script setup lang="ts">
    import BaseTabsItemProps from '../../../../types/props/Tabs/BaseTabs/BaseTabsItemProps';
    withDefaults(defineProps<BaseTabsItemProps>(), {
        color: 'primary',
    });
</script>
<template>
    <slot />
</template>

<style scoped lang="scss" />