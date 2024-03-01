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
      <PopupHelper align-x="right" offset-x="10" :delay="[0, 500]">
        <template #target>
          <BaseButton>Hover me</BaseButton>
        </template>
        <template #popup>
          <div class="popup-content">
            Hello again (wrapped in custom selector, I can be beautiful)
          </div>
        </template>
      </PopupHelper>
      <PopupHelper interactive listener-type="click" align-x="center" align-y="bottom" offset-y="5">
        <template #target>
          <BaseButton>Click me (Interactive popup)</BaseButton>
        </template>
        <template  #popup>
          <div class="popup-content">
            You can click inside of over me
          </div>
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
      <PopupHelper listener-type="click" align-y="bottom" offset-y="5">
        <template #target>
          <TextInput dynamic-label label="Your account number" /> 
        </template>
        <template #popup>
          <div class="popup-content">
            Make sure you wrote correct one!
          </div>
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
      <PopupHelper chain interactive offset-y="15" align-y="bottom" :delay="[0, 700]" >
        <template #target>
          <BaseButton>Hover me</BaseButton>
        </template>
        <template #popup="{ chain }">
          <div class="popup-content">
            <PopupHelper @popped="chain" chain interactive offset-y="15" align-y="center" align-x="right" :delay="[0, 700]" >
              <template #target>
                <BaseButton>Nested hover</BaseButton>
              </template>
              <template #popup="{ chain: c1 }">
                <div class="popup-content">
                <PopupHelper @popped="c1" chain interactive offset-y="15" align-y="bottom" :delay="[0, 700]" >
                  <template #target>
                    <BaseButton>Hover me</BaseButton>
                  </template>
                  <template #popup="{ chain: c2 }">
                    <div class="popup-content">
                    <PopupHelper @popped="c2" chain interactive offset-y="15" align-y="bottom" :delay="[0, 700]" >
                      <template #target>
                        <BaseButton>Nested hover</BaseButton>
                      </template>
                      <template #popup="{ chain: c3 }">
                        <PopupHelper @popped="c3" chain interactive offset-y="15" align-y="bottom" :delay="[0, 700]" >
                          <template #target>
                            <BaseButton>Hover me</BaseButton>
                          </template>
                          <template #popup="{ chain: c4 }">
                            <div class="popup-content">
                              <PopupHelper @popped="c4" chain interactive offset-y="15" align-y="center" align-x="right" :delay="[0, 700]" >
                                <template #target>
                                  <BaseButton>Nested hover</BaseButton>
                                </template>
                                <template #popup="{ chain: c5 }">
                                  <div class="popup-content">
                                    <PopupHelper @popped="c5" chain interactive offset-y="15" align-y="bottom" :delay="[0, 700]" >
                                      <template #target>
                                        <BaseButton>Hover me</BaseButton>
                                      </template>
                                      <template #popup="{ chain: c6 }">
                                        <div class="popup-content">
                                          <PopupHelper @popped="c6" chain interactive offset-y="15" align-y="bottom" :delay="[0, 700]" >
                                            <template #target>
                                              <BaseButton>Nested hover</BaseButton>
                                            </template>
                                            <template #popup>
                                              End
                                            </template>
                                          </PopupHelper>
                                        </div>
                                      </template>
                                    </PopupHelper>
                                  </div>
                                </template>
                              </PopupHelper>
                            </div>
                          </template>
                        </PopupHelper>
                      </template>
                    </PopupHelper>
                    </div>
                  </template>
                </PopupHelper>
                </div>
              </template>
          </PopupHelper>
          </div>
        </template>
      </PopupHelper>
    </div>
  `,
});
