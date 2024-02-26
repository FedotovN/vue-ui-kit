import {
  ListenerType,
  ListenerCallbackFunction,
  Unsubscribe,
  ListenerFunction,
} from "@/types/listeners";
import { data } from "autoprefixer";

function addHoverListener(target: HTMLElement, callback: ListenerCallbackFunction, delay?: [number, number]): Unsubscribe {
  const handleMouseIn = (e: Event) => {
    setTimeout(() => {
      callback(true)
    }, delay?.[0] || 0);
  };
  const handleMouseLeave = (e: Event) => {
      setTimeout(() => {
        callback(false);
      }, delay?.[1] || 0);
  };
  target.addEventListener('mouseenter', handleMouseIn);
  target.addEventListener('mouseleave', handleMouseLeave);
  return () => {
    target.removeEventListener('mouseenter', handleMouseIn);
    target.removeEventListener('mouseleave', handleMouseLeave);
  };
}
function addClickListener(target: HTMLElement, callback: ListenerCallbackFunction, delay?: [number, number]): Unsubscribe {
  const handleClick = (e: Event) => {
      if (target.contains(e.target as HTMLElement) || e.target === target) {
        setTimeout(() => {
          callback(true)
        }, delay?.[0] || 0);
      }
      else {
        setTimeout(() => {
          callback(false);
        }, delay?.[1] || 0)
      }
  }
  document.addEventListener('click', handleClick);
  return () => {
    document.removeEventListener('click', handleClick);
  };
}
function addHoldListener(target: HTMLElement, callback: ListenerCallbackFunction, delay?: [number, number]): Unsubscribe {
  const handleMouseDown = (e: Event) => {
    setTimeout(() => {
      callback(true);
    }, delay?.[0] || 0);
  };
  const handleMouseUp = (e: Event) => {
    setTimeout(() => {
      callback(false);
    }, delay?.[1] || 0);
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
