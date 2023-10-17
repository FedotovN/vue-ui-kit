import { fireEvent, render, screen, RenderResult, waitFor } from '@testing-library/vue';
import { colors } from '../../../types/colors';
import "@testing-library/jest-dom";
import BaseButton from './BaseButton.vue';
import BaseButtonProps from '@/types/props/Button/BaseButtonProps';

describe('Button: Base Button', () => {
  let phrase, DOMElement, elementTextContent;
  beforeAll(() => {
    phrase = 'Hello there!';
    elementTextContent = 'I\'m not that simple! I AM A DOM ELEMENT!';
    DOMElement = `
      <div data-test> ${elementTextContent} </div>
    `
  }) 
  test('Renders text nodes', () => {
    render(BaseButton, { slots: { default: phrase } });
    expect(screen.queryByText(phrase)).toBeInTheDocument();
  })
  test('Renders div nodes', () => {
    const { container } = render(BaseButton, { slots: { default: DOMElement } });
    const component = container.firstChild;
    const childNode = (component as HTMLElement).querySelector('[data-test]');
    expect(childNode).not.toBeNull();
    expect(childNode).toHaveTextContent(elementTextContent);
  })
  test('Emits click event', async () => {
    const { container, emitted } = render(BaseButton, { slots: { default: phrase } }) as RenderResult;
    const button = container.firstChild;
    await fireEvent.click(button as HTMLElement);
    expect(Object.keys(emitted())).toContainEqual('click');
  })
  test('Changes color by prop', async () => {
    let props: BaseButtonProps = { color: 'primary' }; 
    const { container } = render(BaseButton, { 
      slots: { default: phrase },
      props,
    }) as RenderResult;   
    const button = container.firstChild;
    expect(button).toHaveStyle({
      '--accent-color': colors[props.color].join(', '),
    });
    props.color = 'success'
    waitFor(() => {
      expect(button).toHaveStyle({
        '--accent-color': colors[props.color],
      });
    })
  })
  test('Changes CSS classes by prop', async () => {
    let props: BaseButtonProps = { flat: true,  }; 
    const { container } = render(BaseButton, { 
      slots: { default: phrase },
      props,
    }) as RenderResult;   
    const button = container.firstChild;
    expect(button).toHaveClass('flat')
    Object.assign(props, { bold: true, caps: true, fill: true });
    waitFor(() => {
        expect(button).toHaveClass('flat', 'bold', 'fill', 'caps');
    })
  })
})