import BaseButton from '../../../components/Button/BaseButton/BaseButton.vue';
import { waitFor, getByTitle, fireEvent } from '@testing-library/vue';
import "@testing-library/jest-dom";
import create from '../../../tests/utils/create';
import testColor from '../../../tests/utils/testColor';
import testWidth from '../../../tests/utils/testWidth';
describe('Dynamic styles', () => {
  it('Changes color', () => testColor(BaseButton));
  it('Changes width', () => testWidth(BaseButton));
  it('Changes CSS classes', async () => {
    const booleanPropsKeys = ['flat', 'raised', 'large', 'bold', 'caps', 'outlined', 'rounded'];
    const { rerender, mounted } = create(BaseButton);
    for(let key of booleanPropsKeys) {
      await rerender({ [key]: true });
      expect(mounted).toHaveClass(key);
    };
  });
});
describe('Default behaviour', () => {
  it('Dynamicaly renders text', () => {
    const texts = ["a", "b", "c" , "d", "e", "f", "abcdefg", "123"];
    let slots = { default: '' };
    const { mounted } = create(BaseButton, { slots });
    for(let text of texts) {
      slots.default = text;
      waitFor(() => {
        expect(mounted).toHaveTextContent(text);
      })
    }
  });
  it("Renders non-text nodes", () => {
    const node = `<div>
                    <p title="Title">
                      <video src="../../../meme/you-are-rickrolled"></video>
                    </p>
                  </div>`
    const { mounted } = create(BaseButton, { slots: { default: node } });
    const paragraph = getByTitle(mounted, "Title");
    const video = paragraph.children[0] as HTMLElement;
    expect(paragraph).toBeInTheDocument();
    expect(video).toHaveAttribute("src");
  });
  it("Emits click event", async () => {
    const { mounted, emitted } = create(BaseButton);
    await fireEvent.click(mounted);
    expect(emitted().click).toBeTruthy();
  });
  it("Accepts outer attributes", () => {
    const attrs = {
      role: "Show text",
      title: "Button"   
    }
    const { mounted } = create(BaseButton, { attrs });
    Object.keys(attrs).forEach(key => {
      expect(mounted).toHaveAttribute(key, attrs[key]);
    });
  })
});