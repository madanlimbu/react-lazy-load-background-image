import { MutableRefObject, useEffect, useRef, useState } from "react";

/**
 * Lazy load background image.
 *
 * @param src
 */
export function useLazyBackgroundImage(
  elem: MutableRefObject<HTMLElement | null>,
  src: string,
  placeHolder?: string
) {
  const [el, setEl] = useState(elem);
  const observable = useRef<IntersectionObserver | null>(null);
  const [imgSrc, setImgSrc] = useState(placeHolder ? placeHolder : "");
  const cb = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
    entries.forEach((entry) => {
      if (
        el.current &&
        observable.current &&
        (entry.isIntersecting || entry.intersectionRatio > 0)
      ) {
        observable.current.unobserve(el.current);

        const img = new Image();
        img.src = src;
        img.onload = (): void => setImgSrc(src);
      }
    });
  };

  useEffect(() => {
    if (window) {
      observable.current = new IntersectionObserver(cb, {});
      if (el.current && observable.current)
        observable.current.observe(el.current);
    }
    return () => {
      if (observable) {
        if (el.current && observable.current)
          observable.current.unobserve(el.current);
      }
    };
  }, [elem]);

  return imgSrc;
}
