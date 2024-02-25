type ListenerType = "hover" | "click" | "hold";

type Unsubscribe = () => void;

type ListenerCallbackFunction = (isActive: boolean) => void;

type ListenerFunction = (
  target: HTMLElement,
  callback: ListenerCallbackFunction,
  delay?: number,
) => () => {};

export {
  ListenerType,
  Unsubscribe,
  ListenerCallbackFunction,
  ListenerFunction,
};
