interface IIntersection {
    right?: number,
    left?: number,
    top?: number,
    bottom?: number,
}
export default function getScreenIntersectionDifference(element: HTMLElement) {
    let inter: IIntersection = {};
    const { bottom, top, left, right } = element.getBoundingClientRect();
    if (left < 0) inter.left = left;
    if (right > innerWidth) inter.right = innerWidth - right;
    if (top < 0) inter.top = top;
    if (bottom > innerHeight) inter.bottom = innerHeight - bottom;
    return inter;
};