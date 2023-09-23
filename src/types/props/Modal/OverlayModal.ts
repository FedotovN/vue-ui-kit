import { Component } from "vue";
export default interface OverlayModal {
    header?: string,
    content?: string,
    width?: string,
    component?: Component,
    id: string,
}