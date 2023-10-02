<script setup lang="ts">
    import { ComponentInternalInstance, VNode, ComputedRef, ref, computed, useSlots } from 'vue';
    import BaseTabsItemProps from "../../../types/props/Tabs/BaseTabs/BaseTabsItemProps";
    type tabVNode = VNode & { props: BaseTabsItemProps };
    const retrievedVNodes: ComputedRef<VNode[]> = computed(() => {
        return useSlots().default({ toggleItem });
    })
    const items: ComputedRef<tabVNode[]> = computed(() => {
        return retrievedVNodes.value.filter(node => ((node as unknown as ComponentInternalInstance).type.__name === 'BaseTabItem')) as tabVNode[];
    })
    const currItem = ref(null);
    function toggleItem(id: string | number) {
        currItem.value = items.value.find(item => item?.props.id === id);
    }
</script>
<template>
    <div class="base-tabs-wrapper">
        <div class="base-tabs-header">
            <div class="base-tabs-tab" :class="item.props.id === currItem?.props.id ? 'active' : ''" v-for="item in items" :key="item.props.id" @click="toggleItem(item.props.id)">
                <small>{{ item.props.title || '*' }}</small>
            </div>
        </div>
        <div class="base-tabs-content" v-if="currItem">
            <Transition enter-from-class="start" enter-active-class="active" enter-to-class="enter-end" leave-to-class="leave-to" leave-active-class="active" mode='out-in'>
                <div :key="currItem.props.id">
                    <component :is="currItem" />
                </div>
            </Transition>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./styles.scss" />