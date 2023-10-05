<script setup lang="ts">
    import { useSlots } from 'vue';
    import BaseTableColumn from './BaseTableColumn/BaseTableColumn.vue';
    import { getVNodesOfComponent } from "../../../utils/vNodeHelper";
    import { getValue } from "../../../utils/ObjectHelper";
    import BaseTableProps from '@/types/props/Table/BaseTable/BaseTableProps';
    import BaseTableItemProps from '@/types/props/Table/BaseTable/BaseTableColumnProps';
    withDefaults(defineProps<BaseTableProps>(), {
        color: 'primary',
    });
    const columns = getVNodesOfComponent(useSlots().default(), BaseTableColumn).map(cols => cols.props as BaseTableItemProps);
</script>
<template>
    <div class="base-table-wrapper">
        <div class="base-table-header">
            <div class="header-column" v-for="(col, ind) in columns" :key="ind">
                <small>{{  col.title  }}</small>
            </div>
        </div>
        <div class="base-table-rows">
            <div class="base-table-content" v-for="item in items">
                <div class="base-table-item-col" v-for="col in columns">
                    {{ getValue(item, col.field) }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./styles.scss" />