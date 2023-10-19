<script setup lang="ts">
    import BaseInputProps from "@/types/props/Input/BaseInputProps";
    import useColor from "../../../composables/useColor";
    import { computed, ref, useAttrs } from "vue";
    const { getColor } = useColor();
    const attributes = useAttrs();
    const props = withDefaults(defineProps<BaseInputProps>(), {
        activeColor: 'primary',
        errorColor: 'alert',
        successColor: 'success',
        width: '100%'
    })
    const localValue = ref(props.value || '');
    const emit = defineEmits<{
        (event: 'update:modelValue', value: String): void,
    }>();
    const style = computed(() => ({
        '--active-color': getColor(props.activeColor).join(', '),
        '--error-color': getColor(props.errorColor).join(', '),
        '--success-color': getColor(props.successColor).join(', '),
        '--force-width': props.width,
    }))
    const liftPlaceholder = computed(() => focused.value || !!localValue.value || !!attributes.value?.toString());
    const focused = ref(false);
    function onInput(event: Event) {
        const input = event.target as HTMLInputElement;
        if(props.value) {
            input.value = props.value;
            return;
        };
        localValue.value = input.value;
        emit('update:modelValue', localValue.value);
    }
</script>
<template>
    <div class="base-input-wrapper" :style="style">
        <small v-if="placeholder" :class="`base-input-label ${liftPlaceholder ? 'lifted' : ''} ${ focused ? 'highlight' : '' } ${ errorMessage ? 'error' : '' }`">{{ placeholder }}</small>
        <input data-testid="base-input__input" @focusin="focused = true" @focusout="focused = false" @input="onInput" :value="value || localValue" :class="`${errorMessage ? 'error' : ''}`" v-bind="$attrs"  />
        <div :class="`base-input-error  ${errorMessage ? 'shown' : ''} ${!focused ? 'highlight' : 'downlight' }`">
            <small>{{ errorMessage }}</small>
        </div> 
    </div>
</template>

<style scoped lang="scss" src="./styles.scss" />