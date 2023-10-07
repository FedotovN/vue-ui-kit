<script setup lang="ts">
import { ref } from "vue";
import BaseTable from "./components/Table/BaseTable/BaseTable.vue";
import BaseTableColumn from "./components/Table/BaseTable/BaseTableColumn/BaseTableColumn.vue"
const items = ref([    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'George Batunin', age: 18, job: { name: 'Game designer', salary: '1000000' } },    
    { name: 'Alina Ovchinnikova', age: 19, job: { name: 'Consult worker', salary: '40000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
    { name: 'Nikita Fedotov', age: 19, job: { name: 'Frontend Dev', salary: '700000' } },    
]);
function onDelete(item) {
    console.log(item);
}
function onEdit(item) {
    console.log(item);
}
</script>
<template>
    <BaseTable :items="items" items-per-page="4" @item-click="onEdit">
        <BaseTableColumn field="name" title="ФИО" />
        <BaseTableColumn field="age" title="Возраст" />
        <BaseTableColumn field="job.name" title="Профессия" />
        <BaseTableColumn field="job.salary" title="Заработная плата" />
        <template #actions="{ item }">
            <div class="actions-example">
                <small class="action-example"  @click="onDelete(item)">Удалить</small>
                <small class="action-example"  @click="onEdit(item)">Редактировать</small>
            </div>
        </template>
    </BaseTable>
</template>
<style lang="scss">
.actions-example {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 2px;
    .action-example {
        cursor: pointer;
        color: blue;
        &:hover {
            color: purple;
        }
    }
}
</style>
