<script setup lang="ts">
  import BaseButton from './components/Button/BaseButton/BaseButton.vue';
  import OverlayModal from "./components/Modal/OverlayModal/OverlayModal.vue";
  import useModal from './composables/useModal';
  const { open } = useModal();
  function openModal() {
    open({
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit fugiat possimus repudiandae molestias. Id suscipit magnam odit laborum dolore porro officia facilis molestias quidem! Sit voluptatem eaque dicta non est iste earum dolore! Alias error iure quidem autem doloremque adipisci dolor at molestias nihil omnis. Quae vero officia hic ab praesentium dolorum exercitationem corrupti possimus sint sed eveniet rem sit deleniti, cupiditate minus commodi distinctio cum explicabo tempora laudantium molestias iusto cumque optio. Dicta illo atque nam harum quo culpa corrupti similique quis quam enim cupiditate perferendis sit corporis quos voluptatibus vero doloribus, ad explicabo! Voluptate obcaecati reiciendis nulla?`,
      id: '0',
      header: 'In an imperative style!'
    });
  }
  const openAnother = () => {open({
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit fugiat possimus repudiandae molestias. Id suscipit magnam odit laborum dolore porro officia facilis molestias quidem! Sit voluptatem eaque dicta non est iste earum dolore! Alias error iure quidem autem doloremque adipisci dolor at molestias nihil omnis. Quae vero officia hic ab praesentium dolorum exercitationem corrupti possimus sint sed eveniet rem sit deleniti, cupiditate minus commodi distinctio cum explicabo tempora laudantium molestias iusto cumque optio. Dicta illo atque nam harum quo culpa corrupti similique quis quam enim cupiditate perferendis sit corporis quos voluptatibus vero doloribus, ad explicabo! Voluptate obcaecati reiciendis nulla?`,
      id: '0',
      header: 'Another one!'
    })}
</script>
<template>
  <div class="flex gap-2 justify-center items-center">
    <overlay-modal allowHTML width="250px"></overlay-modal>
    <base-button @click="openModal">Open modal</base-button>
    <base-button @click="openAnother">Open another modal</base-button>
  </div>
</template>