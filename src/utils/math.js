export function roundToDecimal(value, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(value * factor) / factor;
}
