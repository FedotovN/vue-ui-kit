import { Meta, StoryFn } from "@storybook/vue3";
import PopupHelper from "@/components/Overlay/PopupHelper/PopupHelper.vue";
import BaseButton from "@/components/Forms/BaseButton/BaseButton.vue";
import TextInput from "@/components/Forms/TextInput/TextInput.vue";
import SliderInput from "@/components/Forms/SliderInput/SliderInput.vue";
export default {
  title: "Overlay / PopupHelper",
} as Meta;

const Template: StoryFn = (args) => ({
  components: { PopupHelper, BaseButton },
  setup() {
    return { args };
  },
  template: `
    <div class="popup-helper-wrapper">
      <PopupHelper listener-type="click" align-x="right" offset-x="5" offset-y="-1">
        <template #target>
          <BaseButton>Click me</BaseButton>
        </template>
        <template #popup>
          Hello there! 😊
        </template>
      </PopupHelper>
    </div>
  `,
});

export const Default = Template.bind({});
export const WithInput = (args) => ({
  components: { PopupHelper, TextInput },
  setup() {
    return { args };
  },
  template: `
    <div class="popup-helper-wrapper">
      <PopupHelper listener-type="click" align-y="bottom" align-x="left" offset-y="5">
        <template #target>
          <TextInput label="Your account number" /> 
        </template>
        <template #popup>
          Make sure you wrote correct one!
        </template>
      </PopupHelper>
    </div>
  `,
});