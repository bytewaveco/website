export default function useScale(
  value: number,
  min: number,
  max: number,
  minScale: number,
  maxScale: number
): number {
  return ((value - min) * (maxScale - minScale)) / (max - min) + minScale
}
