import { Meta, StoryFn } from "@storybook/vue3";
import PopupHelper from "@/components/Overlay/PopupHelper/PopupHelper.vue";
export default {
  title: "Overlay / PopupHelper",
} as Meta;

const Template: StoryFn = (args) => ({
  components: { PopupHelper },
  setup() {
    return { args };
  },
  template: `
    <div class="popup-helper-wrapper">
      <PopupHelper v-bind="{...args}">
        <template #target>
          target
        </template>
        <template #popup>
          popup
        </template>
      </PopupHelper>
    </div>
  `,
});

export const Default = Template.bind({});
