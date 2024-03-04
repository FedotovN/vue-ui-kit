import { HorizontalAlignmentType, VerticalAlignmentType } from "@/types/alignment";
function getHorizontalPositionRaw(align: HorizontalAlignmentType, offset: number, targetRect: DOMRect, popupRect: DOMRect) {
  const { left, width, right } = targetRect;
  const popupWidth = popupRect.width;
  if (align === 'left') return left - offset;
  if (align === 'center') return (width / 2) + left + offset - (popupWidth / 2);
  if (align === 'right') return right + offset;
}
function getVerticalPositionRaw(align: VerticalAlignmentType, offset: number, targetRect: DOMRect, popupRect: DOMRect) {
  const { y, height, bottom } = targetRect;
  const popupHeight = popupRect.height;
  if (align === 'top') return y - offset;
  if (align === 'center') return height / 2 + y + offset - popupHeight / 2;
  if (align === 'bottom') return bottom + offset;
}
function limitByValue(value: number, maxValue: number, screenOffset: number, size: number, minValue = 0): number {
  const tooSmall = value < minValue;
  const tooBig = value + size > maxValue;
  if (tooSmall) {
    return minValue + screenOffset;
  }
  if(tooBig) {
    return maxValue - screenOffset - size;
  }
  return value;
}
export default function getPopupPosition(alignX: HorizontalAlignmentType, alignY: VerticalAlignmentType, offsetX: number, offsetY: number, target: HTMLElement, popup: HTMLElement, screenBoundaryOffset: number): { x: number, y: number } {
  const popupParent = popup.parentElement;
  const parentRect = popupParent.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const popupRect = popup.getBoundingClientRect();

  // POPUP POSITION relative to parent and current scroll
  const posXRaw = getHorizontalPositionRaw(alignX, offsetX, targetRect, popupRect);
  const posYRaw = getVerticalPositionRaw(alignY, offsetY, targetRect, popupRect);

  const posXScrolled = posXRaw + window.scrollX;
  const posYScrolled = posYRaw + window.scrollY;

  const posXRelative = posXScrolled - (parentRect.left + window.scrollX);
  const posYRelative = posYScrolled - (parentRect.top + window.scrollY);

  //  SCREEN BOUNDARIES relative to parent and current scroll
  const pageRight = window.innerWidth + window.scrollX;
  const pageBottom = window.innerHeight + window.scrollY

  const pageRightRelative = pageRight - parentRect.left;
  const pageBottomRelative = pageBottom - parentRect.top

  const pageXRelative = window.scrollX - (parentRect.left + window.scrollX);
  const pageYRelative = window.scrollY - (parentRect.top + window.scrollY);

  const { width, height } = popupRect;
  return {
    x: limitByValue(posXRelative, pageRightRelative, screenBoundaryOffset, width, pageXRelative),
    y: limitByValue(posYRelative, pageBottomRelative, screenBoundaryOffset, height, pageYRelative),
  }
}
