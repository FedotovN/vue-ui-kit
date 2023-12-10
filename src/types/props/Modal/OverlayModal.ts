import { Component, ComponentCustomProps, ComponentObjectPropsOptions } from "vue";
export default interface OverlayModal {
    header?: string,
    content?: string,
    width?: string,
    component?: Component,
    props?: object,
    emits?: { [key in string]: (object) => {}}
    id: string,
}