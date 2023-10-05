<script setup lang="ts">
import { ref } from "vue";
import BaseTable from "./components/Table/BaseTable/BaseTable.vue";
import BaseTableColumn from "./components/Table/BaseTable/BaseTableColumn/BaseTableColumn.vue"
const items = ref([
    { id: 123, val: 'value 1', name: 'Name', obj: { key: 'key-value' }  },
    { id: 321, val: 'value 2', name: 'Name', obj: { key: 'key-value' }  },
    { id: 321, val: 'value 2', name: 'Name', obj: { key: 'key-value' }  },
]);
</script>
<template>
    <BaseTable :items="items">
        <BaseTableColumn field="id" title="Идентификатор" />
        <BaseTableColumn field="val" title="Значение" />
        <BaseTableColumn field="val" title="Значение" />
        <BaseTableColumn field="val" title="Значение" />
        <BaseTableColumn field="val" title="Значение" />
        <BaseTableColumn field="name" title="Имя" />
        <BaseTableColumn field="obj.key" title="Вложенное значение" />
    </BaseTable>
</template>
<style>
</style>
