import { HorizontalAlignmentType, VerticalAlignmentType } from "@/types/alignment";
function getHorizontalPositionRaw(align: HorizontalAlignmentType, offset: number, targetRect: DOMRect, popupRect: DOMRect) {
  const { x, width } = targetRect;
  const popupWidth = popupRect.width;
  if (align === 'left') return (x - offset) - popupWidth;
  if (align === 'center') return width / 2 + x + offset - popupWidth / 2;
  if (align === 'right') return x + width + offset;
}
function getVerticalPositionRaw(align: VerticalAlignmentType, offset: number, targetRect: DOMRect, popupRect: DOMRect) {
  const { y, height } = targetRect;
  const popupHeight = popupRect.height;
  if (align === 'top') return (y - offset) - popupHeight;
  if (align === 'center') return height / 2 + y + offset - popupHeight / 2;
  if (align === 'bottom') return y + height + offset;
}
function limitByValue(value: number, maxValue: number, screenOffset: number, size: number, minValue = 0): number {
  const tooSmall = value < minValue;
  const tooBig = value + size > maxValue;
  if (tooSmall) {
    return minValue + screenOffset;
  };
  if(tooBig) {
    return maxValue - screenOffset - size;
  };
  return value;
}
export default function getPopupPosition(alignX: HorizontalAlignmentType, alignY: VerticalAlignmentType, offsetX: number, offsetY: number, targetRect: DOMRect, popupRect: DOMRect, screenBoundaryOffset: number): { x: number, y: number } {
  const posXScrolled = getHorizontalPositionRaw(alignX, offsetX, targetRect, popupRect) + window.scrollX;
  const posYScrolled = getVerticalPositionRaw(alignY, offsetY, targetRect, popupRect) + window.scrollY;

  const { width, height } = popupRect;
  const widthVisiblePartOfPageX = window.innerWidth + window.scrollX;
  const heightVisiblePartOfPageY = window.innerHeight + window.scrollY;
  const xVisiblePartOfPage = window.scrollX;
  const yVisiblePart = window.scrollY;
  return {
    x: limitByValue(posXScrolled, widthVisiblePartOfPageX, screenBoundaryOffset, width, xVisiblePartOfPage),
    y: limitByValue(posYScrolled, heightVisiblePartOfPageY, screenBoundaryOffset, height, yVisiblePart),
  }
}
