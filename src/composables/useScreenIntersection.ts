import { Ref, ref } from "vue";
interface IIntersection {
    right?: number,
    left?: number,
    top?: number,
    bottom?: number,
}
export default function useScreenIntersection(element: Ref<HTMLElement>) {
    let inter: Ref<IIntersection> = ref({});
    function getIntersection(): IIntersection {
        const { bottom, top, left, right } = element.value.getBoundingClientRect();
        const screenHeight = document.body.clientHeight;
        const screenWidth = document.body.clientHeight;
        if (left < 0) inter.value.left = left;
        if (right > screenWidth) inter.value.right = screenWidth - right;
        if (top < 0) inter.value.top = top;
        if (bottom > screenHeight) inter.value.bottom = screenHeight - bottom;
        return inter.value;
    }
    return { getIntersection }
}