# React lazy load background image

Lazy load background image on a react component.

### Installation

`npm i react-lazy-load-background-image`

### Usage

```
import { useLazyBackgroundImage } from 'react-lazy-load-background-image';
import { useRef } from "react";

function SomeBackgroundComponent() {
  const image_url = 'https://picsum.photos/200';
  const elem = useRef(null);
  const imageSource =  useLazyBackgroundImage(elem, image_url);

  return (<div ref={elem} style={{backgroundImage: `url(${imageSource})`}}/>);
}
```
