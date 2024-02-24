type ListenerType = "hover" | "click" | "hold";

type Unsubscribe = () => void;

type ListenerCallbackFunction = (isActive: boolean) => void;

type ListenerFunction = (
  target: HTMLElement,
  callback: ListenerCallbackFunction,
  popup?: HTMLElement,
) => () => {};

export {
  ListenerType,
  Unsubscribe,
  ListenerCallbackFunction,
  ListenerFunction,
};
