import { HorizontalAlignmentType, VerticalAlignmentType } from "@/types/alignment";
function getHorizontalPositionRaw(align: HorizontalAlignmentType, offset: number, targetRect: DOMRect, popupRect: DOMRect) {
  const { x, width } = targetRect;
  const popupWidth = popupRect.width;
  if (align === 'left') return (x - offset) - popupWidth;
  if (align === 'center') return width / 2 + x + offset - popupWidth / 2;
  if (align === 'right') return x + width + offset;
};
function getVerticalPositionRaw(align: VerticalAlignmentType, offset: number, targetRect: DOMRect, popupRect: DOMRect) {
  const { y, height } = targetRect;
  const popupHeight = popupRect.height;
  if (align === 'top') return (y - offset) - popupHeight;
  if (align === 'center') return height / 2 + y + offset - popupHeight / 2;
  if (align === 'bottom') return y + height + offset;
};
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
export default function getPopupPosition(alignX: HorizontalAlignmentType, alignY: VerticalAlignmentType, offsetX: number, offsetY: number, targetRect: DOMRect, popupRect: DOMRect, screenBoundaryOffset): { x: number, y: number } {
  const posXRaw = getHorizontalPositionRaw(alignX, offsetX, targetRect, popupRect);
  const posYRaw = getVerticalPositionRaw(alignY, offsetY, targetRect, popupRect);
  const { width, height } = popupRect;

  return {
    x: limitByValue(posXRaw, window.innerWidth, screenBoundaryOffset, width),
    y: limitByValue(posYRaw, window.innerHeight, screenBoundaryOffset, height),
  }
}
