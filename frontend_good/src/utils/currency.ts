export function convertFromKRW(krwAmount: number, rate: number): number {
  return Math.round(krwAmount * rate);
} 