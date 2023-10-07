<script setup lang="ts">
    import useColor from '../../../composables/useColor';
    import { useSlots, ref, computed } from 'vue';
    import { getVNodesOfComponent } from "../../../utils/vNodeHelper";
    import { getValue } from "../../../utils/ObjectHelper";
    import BaseTableColumn from './BaseTableColumn/BaseTableColumn.vue';
    import BaseTableProps from '@/types/props/Table/BaseTable/BaseTableProps';
    import BaseTableItemProps from '@/types/props/Table/BaseTable/BaseTableColumnProps';
    import BaseButton from '../../../components/Button/BaseButton/BaseButton.vue';
    const { getColor } = useColor();
    const emit = defineEmits<{
        (e: 'item-click', value: object)
    }>();
    const props = withDefaults(defineProps<BaseTableProps>(), {
        color: 'primary',
        itemsPerPage: 5,
        showButtons: true,
        showPagination: true,
        showFooter: true,
        movePaginationBarEach: 12,
        width: '700px',
    });
    const columns = getVNodesOfComponent(useSlots().default(), BaseTableColumn).map(cols => cols.props as BaseTableItemProps);
    const currPage = ref(0);
    function changePage(value) {
        if (pagesAmount.value < value || value < 0) return;
        currPage.value = value;
    }
    const pagesAmount = computed(() => {
       return Math.ceil(props.items.length / +props.itemsPerPage - 1); 
    });
    const currElements = computed(() => {
        return props.items.slice(currPage.value * +props.itemsPerPage, (currPage.value + 1) * +props.itemsPerPage);
    });
    const style = computed(() => ({
        '--accent-color': getColor(props.color).join(', '),
        '--force-width': props.width,
    }));
</script>
<template>
    <div class="base-table-wrapper" :style="style">
        <div class="base-table-header">
            <div class="header-column" v-for="(col, ind) in columns" :key="ind">
                <small>{{  col.title  }}</small>
            </div>
        </div>
        <div class="base-table-rows" v-if="currElements.length">
            <div class="base-table-content" v-for="item in currElements" @click="$emit('item-click', item)">
                <div class="base-table-item-col"  v-for="col in columns">
                    <small>{{ getValue(item, col.field) }}</small>
                </div>
                <div class="base-table-actions" v-if="$slots.actions" @click.stop>
                    <slot name="actions" v-bind="{ item }" />
                </div>
            </div>
        </div>
        <div class="base-table-fallback-content" v-else>
            Nothing here yet.
        </div>
        <div class="base-table-footer" v-if="showFooter">
            <div class="base-table-pagination-bar" v-if="showPagination">
                <small class="pagination-bar-count">{{ (currPage * +itemsPerPage) + 1 }} - {{ (+itemsPerPage * (currPage + 1)) - (+itemsPerPage - currElements.length) }}</small>
                <div class="pagination-bar-pages-wrapper">
                    <div class="pagination-bar-pages" :style="{ left: -((32 * movePaginationBarEach) + (4.5 * (movePaginationBarEach - 1))) * (Math.floor((currPage) / movePaginationBarEach)) + 'px' }">
                        <div class="pagination-bar-page-button" :class="{ current: currPage + 1 === page }" v-for="page in pagesAmount + 1" @click="changePage(page - 1)">
                            {{ page  }}
                        </div>
                    </div>
                </div>
                <div class="pagination-bar-buttons" v-if="currElements.length && showButtons">
                    <base-button :color="color" v-if="(currPage - 1) > -1" flat @click="changePage(currPage - 1)">Back</base-button>
                    <base-button :color="color" v-if="(currPage + 1) <= pagesAmount" flat @click="changePage(currPage + 1)">Next</base-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./styles.scss" />