import {
  ListenerType,
  ListenerCallbackFunction,
  ListenerFunctionOptions,
  Unsubscribe,
  ListenerFunction,
} from "@/types/props/Overlay/PopupHelper/listeners";

function addHoverListener(target: HTMLElement, callback: ListenerCallbackFunction, options: ListenerFunctionOptions): Unsubscribe {
  const { onBeforePopupUnmount, onPopupMount,  interactive, delay } = options;
  const [startDelay, outDelay] = delay || [0, 0];
  let currPopup: HTMLElement | null = null;
  let startTimeout: NodeJS.Timeout, endTimeout: NodeJS.Timeout;
  function isHovered(el: HTMLElement | null): boolean {
    return el && el.matches(":hover");
  }
  function clearTimeouts() {
    clearTimeout(startTimeout);
    clearTimeout(endTimeout);
  }
  if (interactive) {
    onPopupMount(popup =>  {
      currPopup = popup;
      popup.addEventListener('mouseleave', handleMouseLeave);
    });
    onBeforePopupUnmount(popup => {
      popup.removeEventListener('mouseleave', handleMouseLeave);
      currPopup = null
    })
  }
  const handleMouseIn = () => {
    clearTimeouts();
    startTimeout = setTimeout(() => {
      callback(true)
    }, startDelay);
  };
  const handleMouseLeave = () => {
    clearTimeouts();
    endTimeout = setTimeout(() => {
      if (!isHovered(currPopup) && !isHovered(target)) {
        callback(false);
      }
    }, outDelay);
  };
  target.addEventListener('mouseenter', handleMouseIn);
  target.addEventListener('mouseleave', handleMouseLeave);
  return () => {
    target.removeEventListener('mouseenter', handleMouseIn);
    target.removeEventListener('mouseleave', handleMouseLeave);
  };
}
function addClickListener(target: HTMLElement, callback: ListenerCallbackFunction, options: ListenerFunctionOptions): Unsubscribe {
  const { onBeforePopupUnmount, onPopupMount,  interactive, delay } = options;
  const [startDelay, outDelay] = delay || [0, 0];
  let currPopup: HTMLElement | null = null;
  let startTimeout: NodeJS.Timeout, endTimeout: NodeJS.Timeout;
  if (interactive) {
    onPopupMount(popup => {currPopup = popup});
    onBeforePopupUnmount(() => { currPopup = null });
  }
  function clearTimeouts() {
    clearTimeout(startTimeout);
    clearTimeout(endTimeout);
  }
  const handleClick = (e: Event) => {
    if (target.contains(e.target as HTMLElement) || e.target === target) {
        clearTimeouts();
        startTimeout = setTimeout(() => {
          callback(true)
        }, startDelay);
      }
      else {
        const isInteractiveMode = interactive && currPopup;
        const clickedOnPopup = currPopup?.contains(e.target as HTMLElement) || e.target === currPopup;
        if (isInteractiveMode && clickedOnPopup) return;
        clearTimeouts();
        endTimeout = setTimeout(() => {
          callback(false);
        }, outDelay);
      }
  }
  document.addEventListener('click', handleClick);
  return () => {
    document.removeEventListener('click', handleClick);
  };
}
function addHoldListener(target: HTMLElement, callback: ListenerCallbackFunction, options: ListenerFunctionOptions): Unsubscribe {
  const { delay } = options;
  const [startDelay, outDelay] = delay;
  let startTimeout: NodeJS.Timeout, endTimeout: NodeJS.Timeout;
  if (options.interactive) {
    console.warn('PopupHelper.vue: Listener type "hold" has no "interactive" mode.');
  }
  const handleMouseDown = () => {
    clearTimeout(startTimeout);
    startTimeout = setTimeout(() => {
      callback(true);
    }, startDelay);
  };
  const handleMouseUp = () => {
    clearTimeout(endTimeout);
    endTimeout = setTimeout(() => {
      callback(false);
      }, outDelay);
  };
  target.addEventListener('mousedown', handleMouseDown);
  target.addEventListener('touchstart', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('touchend', handleMouseUp);
  return () => {
    target.removeEventListener('mousedown', handleMouseDown);
    target.removeEventListener('touchstart', handleMouseDown)
    document.removeEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
  };
}

export default {
  hover: addHoverListener,
  click: addClickListener,
  hold: addHoldListener,
} as { [key in ListenerType]: ListenerFunction };
