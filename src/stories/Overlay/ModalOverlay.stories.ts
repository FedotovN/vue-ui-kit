import { Meta, StoryFn } from "@storybook/vue3";
import BaseRadioGroup from "@/components/Forms/BaseRadioGroup/BaseRadioGroup.vue";
import TextInput from "@/components/Forms/TextInput/TextInput.vue";
import BaseButton from "@/components/Forms/BaseButton/BaseButton.vue";
import BaseCheckbox from "@/components/Forms/BaseCheckbox/BaseCheckbox.vue";
import ModalOverlay from "@/components/Overlay/ModalOverlay/ModalOverlay.vue";
import useModal from "@/composables/useModal";
import { Ref, ref } from "vue";
import BaseRadioProps from "@/types/props/Forms/Radio/BaseRadioProps";
import BaseDropdown from "@/components/Forms/BaseDropdown/BaseDropdown.vue";
const { open, add, modals } = useModal();
export default {
  title: "Overlay / Modal Overlay",
} as Meta;

const Template: StoryFn = (args) => ({
  components: { ModalOverlay, BaseButton, TextInput, BaseRadioGroup, BaseCheckbox },
  setup() {
    const components = { BaseButton, TextInput, BaseDropdown };
    const componentOnly = ref(false);
    const modalId: Ref<string> = ref();
    const componentToRender = ref();
    const componentOptions: BaseRadioProps[] = [
      { id: 'button', value: 'BaseButton', label: 'Base Button', },
      { id: 'input', value: 'TextInput', label: 'Text Input' },
      { id: 'dropdown', value: 'BaseDropdown', label: 'Base Dropdown' },
    ]
    function addModal() {
      const component = componentToRender.value ? components[componentToRender.value.value] : null;
      add({ id: modalId.value, componentOnly: componentOnly.value, content: `Content of modal with id ${modalId.value}`, header: 'Header', component });
    }
    function openModal() {
      open(modalId.value);
    }
    return {
      args,
      modalId,
      openModal,
      addModal,
      componentOnly,
      componentOptions,
      componentToRender,
      modals,
    };
  },
  template: `
    <div class="modal-overlay-default-story">
      <h3>ModalOverlay component is used to easily open modal window created through <code>useModal</code> composable</h3>
      <p>Here's a simple playground</p>
      <div class="modal-overlay-default-story__controls">
        <div class="modal-overlay-default-story__form">
          <div class="modal-overlay-default-story__id">
            <TextInput v-model="modalId" label="Enter modal ID" dynamic-label></TextInput>
            <BaseButton @click="openModal">Open</BaseButton>
            <BaseButton @click="addModal" outlined>Add</BaseButton>
          </div>
          <div class="modal-overlay-default-story__components">
            <BaseRadioGroup name="components" label="You can render component instead of string" as-column :items="componentOptions" v-model="componentToRender" />
            <BaseCheckbox label="Component only" v-model="componentOnly" />
          </div>
        </div>
        <div class="modal-overlay-default-story__modals-list">
          <p>Modals stored in memory:</p>
          <ol>
            <li v-for="modal in modals">
              Modal with id of '<strong>{{ modal.id + '' }}</strong>'
            </li>
          </ol>
        </div>
      </div>
      <ModalOverlay transition-name="modal-slide" />
    </div>
  `,
});

export const Default = Template.bind({});
