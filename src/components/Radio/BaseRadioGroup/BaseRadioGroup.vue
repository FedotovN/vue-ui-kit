<script setup lang="ts">
import BaseRadioGroupProps from '@/types/props/Radio/BaseRadioGroupProps';
import BaseRadio from '../BaseRadio/BaseRadio.vue';
import BaseRadioProps from '@/types/props/Radio/BaseRadioProps';
import { computed, ref, watch } from 'vue';
import BaseButton from '@/components/Button/BaseButton/BaseButton.vue';
import { useColor } from '@/composables';
const emit = defineEmits<{
    (e: 'update:modelValue', value: BaseRadioProps)
}>();
const props = withDefaults(defineProps<BaseRadioGroupProps>(), {
    name: 'group'
});
const propped = computed(() => props.value || props.modelValue);
const localValue = ref(propped.value || null);
watch(propped, v => localValue.value = v);
function onCheck(radio: BaseRadioProps) {
    localValue.value = radio;
    emit('update:modelValue', localValue.value);
}
const style = computed(() => {
    return {
        '--selected-color': useColor().get(localValue.value?.color || 'primary'),
    }
});
</script>
<template>
    <div class="base-radio-group" :style="style">
        <div class="base-radio-group__header" v-if="label">
            <label>{{ label }}</label>
            <BaseButton color='alert' :disabled="!localValue" flat @click="localValue = null">Unselect</BaseButton>
        </div>
        <div class="base-radio-group__main">
            <div class="base-radio-group__radios" :class="{ column: asColumn }">
                <BaseRadio @checked="onCheck(radio)" v-for="radio in items" :name="name" :checked="localValue?.value === radio.value" v-bind="{...radio}" />
            </div>
            <BaseButton color='alert' :disabled="!localValue" flat @click="localValue = null" v-if="!showValue && !label">Unselect</BaseButton>
        </div>
        <div class="base-radio-group__selected" v-if="localValue && showValue">
            <p>Selected: <span class="base-radio-group__selected-value">{{ localValue?.value }}</span></p>
            <BaseButton color='alert' :disabled="!localValue" flat @click="localValue = null">Unselect</BaseButton>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./style.scss" />