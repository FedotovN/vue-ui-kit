import { Component } from "vue";
export default interface OverlayModal {
    header?: string,
    content?: string,
    width?: string,
    component?: Component,
    props?: object,
    emits?: { [key in string]: (object) => void}
    onClose?: () => void,
    id: string,
}