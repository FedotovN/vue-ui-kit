import { Component } from "vue";
import { Transitions } from "@/types/transitions";
export default interface OverlayModalOptions {
  header?: string,
  content?: string,
  width?: string,
  component?: Component,
  componentOnly?: boolean,
  transitionName?: Transitions | string,
  props?: object,
  emits?: { [key in string]: (object: object) => void}
  onClose?: () => void,
  id: string,
}
