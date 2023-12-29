function normalize(
  min: number,
  max: number,
  value: number,
  side: "min" | "max",
  minimalRange?: number,
  limit?: number,
  minimum?: number,
): number {
  if (!value) {
    if (side === "max") {
      value = limit || 0;
    } else {
      value = minimum || 0;
    }
  }
  if (side === "max") {
    if (value < min + (minimalRange || 0)) {
      value = min + (minimalRange || 0);
    }
  } else {
    if (value! > max - (minimalRange || 0)) {
      value = max - (minimalRange || 0);
    }
  }
  if (limit && value > limit) value = limit;
  if (minimum && value < (minimum || 0)) value = minimum;
  return value;
}
function getIntends(
  min: number,
  max: number,
  limit?: number,
): [number, number] {
  const leftIntend = (min / (limit || 100)) * 100;
  const rightIntend = 100 - (max / (limit || 100)) * 100;
  return [leftIntend, rightIntend];
}

export { normalize, getIntends };
