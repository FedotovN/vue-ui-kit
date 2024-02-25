import {
  ListenerType,
  ListenerCallbackFunction,
  Unsubscribe,
  ListenerFunction,
} from "@/types/listeners";

function addHoverListener(target: HTMLElement, callback: ListenerCallbackFunction, delay?: number): Unsubscribe {
  const handleMouseIn = (e: Event) => {
    callback(true)
  };
  const handleMouseLeave = (e: Event) => {
    setTimeout(() => {
      if (!target.matches(':hover'))
        callback(false);
    }, delay)
  };
  target.addEventListener('mouseover', handleMouseIn);
  target.addEventListener('mouseleave', handleMouseLeave);
  return () => {
    target.removeEventListener('mouseover', handleMouseIn);
    target.removeEventListener('mouseleave', handleMouseLeave);
  };
}
function addClickListener(target: HTMLElement, callback: ListenerCallbackFunction): Unsubscribe {
  const handleClick = (e: Event) => { 
    if (target.contains(e.target as HTMLElement) || e.target === target)
      callback(true)
    else callback(false);
  }
  document.addEventListener('click', handleClick);
  return () => {
    document.removeEventListener('click', handleClick);
  };
}
function addHoldListener(target: HTMLElement, callback: ListenerCallbackFunction): Unsubscribe {
  const handleMouseDown = (e: Event) => { callback(true) };
  const handleMouseUp = (e: Event) => { callback(false) };
  target.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp)
  return () => {
    target.removeEventListener('mousedown', handleMouseDown);
    document.removeEventListener('mouseup', handleMouseUp)
  };
}

export default {
  hover: addHoverListener,
  click: addClickListener,
  hold: addHoldListener,
} as { [key in ListenerType]: ListenerFunction };
