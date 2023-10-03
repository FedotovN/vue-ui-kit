<script setup lang="ts">
import BaseFileBadgeProps from '../../../../types/props/Checkbox/FileInput/BaseFileBadgeProps';
    const props = defineProps<BaseFileBadgeProps>();
    function downloadFile() {
        const a = document.createElement('a');
        const url = URL.createObjectURL(props.toDownload);
        a.href = url;
        a.download = props.value.name;
        a.click();
        a.remove();
    };
</script>
<template>
    <div class="base-file-badge-wrapper" :class="!props.value ? 'hide' : ''">
        <div class="base-file-badge-name" v-if="props.value?.name">
            <small>{{ props.value.name }}</small>
        </div>
        <div class="base-file-badge-size" v-if="props.value?.kbSize">
            <small>{{ props.value.kbSize }}</small>
        </div>
        <div class="base-file-badge-format" v-if="props.value?.format">
            <small>{{ props.value.format }}</small>
        </div>
        <div class="base-file-badge-download" v-tooltip="`Download file ${props.value.name || ''}`" v-if="props.toDownload" @click="downloadFile">
            <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path class="clr-i-outline clr-i-outline-path-1" d="M30.92,8H26.55a1,1,0,0,0,0,2H31V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V10A2,2,0,0,0,30.92,8Z"></path><path class="clr-i-outline clr-i-outline-path-2" d="M10.3,18.87l7,6.89a1,1,0,0,0,1.4,0l7-6.89a1,1,0,0,0-1.4-1.43L19,22.65V4a1,1,0,0,0-2,0V22.65l-5.3-5.21a1,1,0,0,0-1.4,1.43Z"></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
            </svg>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./styles.scss" />