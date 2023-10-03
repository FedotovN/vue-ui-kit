<script setup lang="ts">
import BaseFileInput from "./components/Input/FileInput/BaseFileInput/BaseFileInput.vue";
import BaseFileBadge from "./components/Input/FileInput/BaseFileBadge/BaseFileBadge.vue"
import { FileDisplay } from "./types/file";
import { ref, Ref } from "vue";
import useModal from "./composables/useModal";
import useToast from "./composables/useToast";
const { add: showToast } = useToast();
const { add, open } = useModal();
import OverlayModal from "./components/Modal/OverlayModal/OverlayModal.vue";
import OverlayToast from "./components/Toast/OverlayToast/OverlayToast.vue";
const files: Ref<FileDisplay[]> = ref([]);
function onDelete(file: FileDisplay) {
  add({
  id: '0',
  header: `Delete ${file.name}`,
  content: `Are to sure you want to delete ${file.name} ?`
})
  open('0');
}
</script>
<template>
  <OverlayModal />
  <overlay-toast horizontal-side="left" vertical-side="bottom"></overlay-toast>
  <base-file-input @input="files.push($event)" />
  <div class="col">
    <base-file-badge @download="showToast({ color: 'success', delay: 5000, content: 'Download started' })" :value="file" :to-download="file.toDownload" v-for="file in files" allow-delete @delete="onDelete(file)" />
  </div>
</template>
<style>
.col {
  padding-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
}
</style>
