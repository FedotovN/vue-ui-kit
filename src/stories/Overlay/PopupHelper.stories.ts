import { Meta, StoryFn } from "@storybook/vue3";
import PopupHelper from "@/components/Overlay/PopupHelper/PopupHelper.vue";
import BaseButton from "@/components/Forms/BaseButton/BaseButton.vue";
import TextInput from "@/components/Forms/TextInput/TextInput.vue";
export default {
  title: "Overlay / Popup Helper",
} as Meta;

const Template: StoryFn = (args) => ({
  components: { PopupHelper, BaseButton },
  setup() {
    return { args };
  },
  template: `
    <div class="popup-helper-wrapper">
      <PopupHelper listener-type="click" align-x="right" offset-x="5" offset-y="-1">
        <template #target="{popupIsActive}">
          <BaseButton>{{popupIsActive ? 'You clicked me!' : 'Click me'}}</BaseButton>
        </template>
        <template #popup>
          Hello there! 😊
        </template>
      </PopupHelper>
      <PopupHelper  align-x="right" offset-x="5" offset-y="-1">
        <template #target>
          <BaseButton>Hover me</BaseButton>
        </template>
        <template #popup>
          Hello there! 😊
        </template>
      </PopupHelper>
      <PopupHelper interactive listener-type="click" align-x="center" align-y="bottom" offset-y="5">
        <template #target>
          <BaseButton>Click me (Interactive popup)</BaseButton>
        </template>
        <template  #popup>
          You can click inside of over me
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
          <TextInput dynamic-label label="Your account number" /> 
        </template>
        <template #popup>
          Make sure you wrote correct one!
        </template>
      </PopupHelper>
    </div>
  `,
});
export const Chained = (args) => ({
  components: { PopupHelper, BaseButton },
  setup() {
    return { args };
  },
  template: `
    <div class="popup-helper-wrapper">
      <PopupHelper listener-type="click" delay="2000" interactive chain align-x="center" align-y="bottom" offset-y="5">
        <template #target>
          <BaseButton raised>Open menu</BaseButton>
        </template>
        <template #popup="{ chain }">
          <PopupHelper listener-type="click" delay="1700" interactive @popped="chain" chain align-x="center" align-y="bottom" offset-y="10">
            <template #target>
              <BaseButton>Open submenu</BaseButton>
            </template>
            <template #popup="{ chain: c1 }">
              <PopupHelper listener-type="click" delay="1300" interactive @popped="c1" align-x="center" align-y="bottom" offset-y="10">
                <template #target>
                  <BaseButton>Open another submenu</BaseButton>
                </template>
                <template #popup="{ chain: c2 }">
                  <PopupHelper listener-type="click" delay="1000" interactive @popped="c2" align-x="center" align-y="bottom" offset-y="10">
                    <template #target>
                      <BaseButton>I'm tired of these submenus!</BaseButton>
                    </template>
                    <template #popup>
                      Awesome!
                    </template>
                  </PopupHelper>
                </template>
              </PopupHelper>
            </template>
          </PopupHelper>
        </template>
      </PopupHelper>
    </div>
  `,
});