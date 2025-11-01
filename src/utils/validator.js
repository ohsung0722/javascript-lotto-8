export function isInteger(value) {
  return Number.isInteger(value);
}

export function isInRange(value, min, max) {
  return value >= min && value <= max;
}

export function hasNoDuplicates(array) {
  return new Set(array).size === array.length;
}
