interface IIntersection {
    right?: number,
    left?: number,
    top?: number,
    bottom?: number,
}
export default function getScreenIntersectionDifference(element: HTMLElement) {
    let inter: IIntersection = {};
    const { bottom, top, left, right } = element.getBoundingClientRect();
    const screenHeight = document.body.clientHeight;
    const screenWidth = document.body.clientHeight;
    if (left < 0) inter.left = left;
    if (right > screenWidth) inter.right = screenWidth - right;
    if (top < 0) inter.top = top;
    if (bottom > screenHeight) inter.bottom = screenHeight - bottom;
    return inter;
};