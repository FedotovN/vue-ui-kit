<script setup lang="ts">
    import useModal from './composables/useModal';
    import BaseLoader from './components/Loader/BaseLoader/BaseLoader.vue';
    import BaseInput from './components/Input/BaseInput/BaseInput.vue';
    import BaseButton from './components/Button/BaseButton/BaseButton.vue';
    const { open, add, close } = useModal();
    function createAndOpenAnotherModal() {
        add({
            header: 'Another one!',
            content: 'Another modal',
            width: '500px',
            id: '1',
        });
        close();
        setTimeout(() => open('1'), 200);
    }
</script>
<template>
    <div>
        <h2>Damn it works!</h2>
        <p style="padding-bottom: 10px;">Example of a component passed into modal</p>
        <BaseInput placeholder="Input example"></BaseInput>
        <div class="flex">
            <base-button flat color='alert' @click="createAndOpenAnotherModal">Another modal...</base-button>
            <base-button color='secondary'>Just a button</base-button>
        </div>
    </div>
</template>
<style scoped>
    .flex {
        display: flex;
        gap: 10px;
    }
</style>
