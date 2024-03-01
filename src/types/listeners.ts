type ListenerType = "hover" | "click" | "hold";

type Unsubscribe = () => void;

type ListenerCallbackFunction = (isActive: boolean) => void;
type PopupLifecycleHookCallback = (popup: HTMLElement) => void;
type PopupLifecycleHook = (callback: PopupLifecycleHookCallback) => void;

type ListenerFunctionOptions = {
  delay?: [number, number],
  interactive?: boolean,
  onBeforePopupUnmount?: PopupLifecycleHook,
  onPopupMount?: PopupLifecycleHook,
}

type ListenerFunction = (
  target: HTMLElement,
  callback: ListenerCallbackFunction,
  options?: ListenerFunctionOptions,
) => () => {};

export {
  ListenerType,
  Unsubscribe,
  ListenerCallbackFunction,
  ListenerFunction,
  ListenerFunctionOptions,
  PopupLifecycleHookCallback,
  PopupLifecycleHook
};
