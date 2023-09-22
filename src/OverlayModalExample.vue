<script setup lang="ts">
    import useModal from './composables/useModal';
    import BaseInput from './components/Input/BaseInput/BaseInput.vue';
    import BaseButton from './components/Button/BaseButton/BaseButton.vue';
    const { open, add, close } = useModal();
    function createAndOpenAnotherModal() {
        add({
            header: 'Another one!',
            content: 'Another modal',
            id: '1',
        });
        close();
        requestAnimationFrame(() => {
            setTimeout(() => open('1'), 100);
        })
    }
</script>
<template>
    <div>
        <h2>Such a beautiful template!</h2>
        <p style="padding-bottom: 10px;">Example of a component passed into modal</p>
        <BaseInput placeholder="Input example"></BaseInput>
        <base-button caps flat color='alert' @click="createAndOpenAnotherModal">What if...</base-button>
    </div>
</template>
