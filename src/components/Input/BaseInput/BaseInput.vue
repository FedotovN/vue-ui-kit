<script setup lang="ts">
    import BaseInputProps from "@/types/props/Input/BaseInputProps";
    import useColor from "../../../composables/useColor";
    import { computed, ref } from "vue";
    const { getColor } = useColor();
    const props = withDefaults(defineProps<BaseInputProps>(), {
        activeColor: 'primary',
        errorColor: 'alert',
        successColor: 'success',
        width: '100%'
    })
    const emit = defineEmits<{
        (event: 'update:modelValue', value: String): void,
    }>();
    const style = computed(() => ({
        '--active-color': getColor(props.activeColor).join(', '),
        '--error-color': getColor(props.errorColor).join(', '),
        '--success-color': getColor(props.successColor).join(', '),
        '--force-width': props.width,
    }))
    const focused = ref(false);
    function onInput(event: Event) {
        const input = event.target as HTMLInputElement;
        emit('update:modelValue', input.value);
    }
</script>
<template>
    <div class="base-input-wrapper" :style="style">
        <small v-if="placeholder" :class="`base-input-label ${focused || value ? 'lifted' : ''} ${ focused ? 'highlight' : '' } ${ errorMessage ? 'error' : '' }`">{{ placeholder }}</small>
        <input v-bind="$attrs" @input="onInput" :value="value" @focusin="focused = true" @focusout="focused = false" :class="`${errorMessage ? 'error' : ''}`"  />
        <div :class="`base-input-error  ${errorMessage ? 'show' : ''} ${!focused ? 'highlight' : 'downlight' }`" v-if="errorMessage" >
            <font-awesome-icon icon="fa-solid fa-xmark-circle"></font-awesome-icon>
            <small>{{ errorMessage }}</small>
        </div>
        <div :class="`base-input-description ${errorMessage ? 'lower' : ''}`" v-if="description">
            <font-awesome-icon icon="fa-solid fa-info-circle"></font-awesome-icon>
            <small>{{ description }}</small>
        </div>
    </div>
</template>

<style scoped lang="scss" src="./styles.scss" />