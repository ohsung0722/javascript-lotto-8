export function isInteger(value) {
  return Number.isInteger(value);
}

export function isInRange(value, min, max) {
  return value >= min && value <= max;
}

export function hasNoDuplicates(array) {
  return new Set(array).size === array.length;
}

export function ensureNotEmpty(input, message) {
  if (!input || input.trim() === "") {
    throw new DefaultError(message);
  }
}

export const ensureContainsDelimiter = (input, delimiter, message) => {
  if (!input.includes(delimiter)) {
    throw new DefaultError(message);
  }
};

export const ensureAllNumbers = (array, message) => {
  if (array.some((number) => Number.isNaN(number))) {
    throw new DefaultError(message);
  }
};
