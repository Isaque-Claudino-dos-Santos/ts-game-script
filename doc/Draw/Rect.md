- [Home](../../README.md)

# Rect

Handdle rect in canvas

- [Rect](#rect)
  - [Instance](#instance)
  - [Attributes](#attributes)
  - [Methods](#methods)
    - [Render](#render)
    - [Reposition](#reposition)
    - [Resize](#resize)
    - [Log](#log)

## Instance

```ts
import Rect from '@Draw/Rect'

const r1 = new Rect(context: CanvasRenderingContext2D)
```

## Attributes

| Name   | Type   | Default |
| ------ | ------ | ------- |
| x      | number | 0       |
| y      | number | 0       |
| width  | number | 0       |
| height | number | 0       |
| color  | string | black   |
| rotate | number | 0       |

## Methods

### Render

Method which really render in canvas the rectangle

| Param  | Type               | Default |
| ------ | ------------------ | ------- |
| `type` | 'fill' or 'stroke' | 'fill'  |

Return: `Void`

```ts
import Rect from '@Draw/Rect'

const r1 = new Rect(context: CanvasRenderingContext2D)

r1.render('fill') 
//    OR
r1.render('stroke')
```


### Reposition

Reposition rect in canvas

| Param | Type   | Describe             |
| ----- | ------ | -------------------- |
| `x`   | number | Define position in x |
| `y`   | number | Define position in y |

Return: `Void`

```ts
import Rect from '@Draw/Rect'

const r1 = new Rect(context: CanvasRenderingContext2D)

r1.reposition(10,10)
```

### Resize

Resize rect in canvas

| Param    | Type   |
| -------- | ------ |
| `width`  | number |
| `height` | number |

Return: `Void`

```ts
import Rect from '@Draw/Rect'

const r1 = new Rect(context: CanvasRenderingContext2D)

r1.resize(10,10)
```

### Log

Log this in console


```ts
import Rect from '@Draw/Rect'

const r1 = new Rect(context: CanvasRenderingContext2D)

r1.log() //return this istance in console
```