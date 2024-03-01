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
      <PopupHelper interactive align-x="right">
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
      <h2>Popups can be chained, so that one popup contains the other and this goes on</h2>
      <PopupHelper chain interactive align-y="bottom">
        <template #target="{chainedPopupIsActive, popupIsActive}">
          <BaseButton size="small">I am a button hover me</BaseButton>
        </template>
        <template #popup="{ chain: c1 }">
          <p>Wowza! I am a popup 1</p>
          <PopupHelper @popped="c1" chain interactive align-y="bottom">
            <template #target="{ chainedPopupIsActive, popupIsActive }">
              <BaseButton size="small">And I am a button hover me</BaseButton>
            </template>
            <template #popup="{ chain: c2 }">
              <p>Wowza! I am a popup 2</p>
              <PopupHelper @popped="c2" chain interactive align-y="bottom">
                <template #target>
                  <BaseButton size="small">And I am a button hover me</BaseButton>
                </template>
                <template #popup="{chain: c3}">
                  <PopupHelper @popped="c3" chain interactive align-y="bottom">
                    <template #target>
                      <BaseButton size="small">And I am a button hover me</BaseButton>
                    </template>
                    <template #popup>

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
