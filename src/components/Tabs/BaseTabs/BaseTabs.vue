<script setup lang="ts">
    import { ComponentInternalInstance, VNode, ref, computed, useSlots } from 'vue';
    import BaseTabsItemProps from "../../../types/props/Tabs/BaseTabs/BaseTabsItemProps";
    import BaseTabsProps from "../../../types/props/Tabs/BaseTabs/BaseTabsProps";
    import useColor from '../../../composables/useColor';
    type tabVNode = VNode & { props: BaseTabsItemProps };
    const { getColor } = useColor();
    const props = withDefaults(defineProps<BaseTabsProps>(), {
        color: 'primary',
        width: '400px',
        height: 'auto',
    });
    const retrievedVNodes = computed(() => {
        return useSlots().default({ toggleItem });
    })
    const items = computed(() => {
        return retrievedVNodes.value.filter(node => ((node as unknown as ComponentInternalInstance).type.__name === 'BaseTabItem')) as tabVNode[];
    })
    const defaultValue = computed(() => {
        if (props.defaultFirst) return items.value[0];
        if (props.defaultTabId) return items.value.find(item => item.props.id == props.defaultTabId)
    });
    const currItem = ref(defaultValue.value);
    const style = computed(() => ({
        '--accent-color': getColor(props.color).join(', '),
        '--force-width': props.width,
        '--force-height': props.height
    }));
    function toggleItem(id: string | number) {
        const target = (items.value.find(item => item?.props.id === id));
        if (target.props.disabled !== undefined) return;
        currItem.value = target;
    }
    </script>
<template>
    <div class="base-tabs-wrapper" :style="style">
        <div class="base-tabs-header">
            <div
            class="base-tabs-tab"
            :class="{
                active: item.props.id === currItem?.props.id,
                disabled: item.props.disabled !== undefined,
            }"
            v-for="item in items"
            :key="item.props.id"
            @click="toggleItem(item.props.id)">
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