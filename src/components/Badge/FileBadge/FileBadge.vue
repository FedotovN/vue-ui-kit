<script setup lang="ts">
    import BaseFileBadgeProps from '../../../types/props/Input/FileInput/BaseFileBadgeProps';
    import { downloadLocalFile } from '../../../utils/FilesHelper';
    import { computed } from "vue";
    import useColor from "../../../composables/useColor";
    const { getColor } = useColor();
    const props = withDefaults(defineProps<BaseFileBadgeProps>(), {
        allowDownload: true,
        color: 'primary'
    });
    const emit = defineEmits<{(e: 'download'), (e: 'delete')}>();
    const downloadFile = () => {
        downloadLocalFile(props.toDownload, props.value.name);
        emit('download');
    };
    const style = computed(() => ({
      '--accent-color': getColor(props.color).join(', '),
    }))
</script>
<template>
    <div class="base-file-badge-wrapper" :style="style" :class="!value ? 'hide' : ''">
        <div class="base-file-badge-name" v-if="value?.name">
            <small>{{ value.name }}</small>
        </div>
      <div class="base-file-badge-format" v-if="value?.format">
        <small>{{ value.format }}</small>
      </div>
      <div class="base-file-badge-size" v-if="value?.kbSize">
          <small>{{ value.kbSize }}</small>
        </div>
        <div class="base-file-badge-download" v-tooltip="`Download ${value.name || ''}`" v-if="toDownload && allowDownload" @click="downloadFile">
            <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path class="clr-i-outline clr-i-outline-path-1" d="M30.92,8H26.55a1,1,0,0,0,0,2H31V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V10A2,2,0,0,0,30.92,8Z"></path><path class="clr-i-outline clr-i-outline-path-2" d="M10.3,18.87l7,6.89a1,1,0,0,0,1.4,0l7-6.89a1,1,0,0,0-1.4-1.43L19,22.65V4a1,1,0,0,0-2,0V22.65l-5.3-5.21a1,1,0,0,0-1.4,1.43Z"></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
            </svg>
        </div>
        <div class="base-file-badge-vertical-line"></div>
        <div class="base-file-badge-delete" v-tooltip="`Delete ${value.name || ''}`" v-if="allowDelete" @click="$emit('delete')">
            <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8 "></polygon> </g></svg>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./styles.scss" />