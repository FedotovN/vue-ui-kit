<template>
  <Story title="Button/Base Button" :layout="{ type: 'grid' }">
    <Variant title="Default">
      <div class="padding">
        <BaseButton>Button</BaseButton>
      </div>
    </Variant>
    <Variant title="Raised">
      <div class="padding">
        <BaseButton raised>Button</BaseButton>
      </div>
    </Variant>
    <Variant title="Outlined">
      <div class="padding">
        <BaseButton outlined>Button</BaseButton>
      </div>
    </Variant>
    <Variant title="Rounded">
      <div class="padding">
        <BaseButton rounded>Button</BaseButton>
      </div>
    </Variant>
    <Variant title="Flat">
      <div class="padding">
        <BaseButton flat>Button</BaseButton>
      </div>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BaseButton from '@/components/Button/BaseButton/BaseButton.vue';
</script>
<style>
.padding {
  padding: 15px;
}
</style>