- [Home](../../README.md)

# Canvas

- [Canvas](#canvas)
  - [Attributes](#attributes)
  - [Instance](#instance)

## Attributes

 | Name    | Type                     | Describe                                   |
 | ------- | ------------------------ | ------------------------------------------ |
 | screen  | HTMLCanvasElement        | Reference of the element canvas            |
 | context | CanvasRenderingContext2D | Context 2D to drawing in canvas  very used |

## Instance

 | Params   | Type   | Default |
 | -------- | ------ | ------- |
 | `width`  | number | 300     |
 | `height` | number | 300     |

```ts
import Canvas from '@Display/Canvas'
   
const canvas = new Canvas(600, 400)
```
