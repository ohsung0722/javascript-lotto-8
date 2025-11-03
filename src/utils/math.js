export function roundToDecimal(value, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(value * factor) / factor;
}

export function calculateRate(totalPrize, purchaseAmount) {
  if (purchaseAmount <= 0) {
    return 0;
  }

  return (totalPrize / purchaseAmount) * 100;
}
