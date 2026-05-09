/** Maps vertical scroll to horizontal track offset (pixels per scroll unit). */
export const BRAND_MARQUEE_SCROLL_TO_X = 0.42;

/**
 * Reads measured width of a repeating segment element (px).
 */
export function readSegmentWidthPx(element: HTMLElement | null): number {
  if (!element) return 0;
  const w = element.offsetWidth;
  return w > 0 ? w : 0;
}

/**
 * Keeps translateX in [-segmentWidth, 0) so the marquee never shows an empty gap.
 */
export function computeMarqueeTranslateX(scrollY: number, segmentWidthPx: number): number {
  if (segmentWidthPx <= 0) return 0;
  const raw = scrollY * BRAND_MARQUEE_SCROLL_TO_X;
  const w = segmentWidthPx;
  return (((raw % w) + w) % w) - w;
}

export function formatMarqueeTransform3d(translateXPx: number): string {
  return `translate3d(${translateXPx}px, 0, 0)`;
}
