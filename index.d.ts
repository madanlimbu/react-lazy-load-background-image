import { MutableRefObject } from "react";

type useLazyBackgroundImage = (
  elem: MutableRefObject<HTMLElement | null>,
  src: string,
  placeHolder?: string
) => string;
