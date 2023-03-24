- [Home](../../README.md)

# Gravity

This module to create gravity efect, with acceleration, velocity and mass.

- [Gravity](#gravity)
  - [Instance](#instance)
  - [Methods](#methods)
    - [Horizontal](#horizontal)
    - [Vertical](#vertical)
    - [Reset](#reset)
  - [Types](#types)
    - [TypeData](#typedata)

## Instance

| Param   | Type                  | Default  |
| ------- | --------------------- | -------- |
| `data`  | [TypeData](#typedata) | Required |
| `force` | number                | 10       |

Return: `Void`

```ts
import Gravity from '@Physical'

player = {
  x: 10,
  y: 10,
  width: 30,
  height: 30
}

const gravity = new Gravity(player, 12)
```

## Methods

### Horizontal

Add efect horizontal gravity in axel `x`.

| Param      | Type    | Default |
| ---------- | ------- | ------- |
| `inverted` | boolean | false   |

Return: `Void`

```ts
import Gravity from '@Physical'

player = {
  x: 10,
  y: 10,
  width: 30,
  height: 30
}

const gravity = new Gravity(player, 12)

const loop = () => {
  gravity.horizontal(false) // increment in x
  //OR
  gravity.horizontal(true) // decrement in x
  requestAnimationFrame(loop)
} 

loop()
```

### Vertical

Add efect vertical gravity in axel `y`.

| Param      | Type    | Default |
| ---------- | ------- | ------- |
| `inverted` | boolean | false   |

Return: `Void`

```ts
import Gravity from '@Physical'

player = {
  x: 10,
  y: 10,
  width: 30,
  height: 30
}

const gravity = new Gravity(player, 12)

const loop = () => {
  gravity.vertical(false) // increment in y
  //OR
  gravity.vertical(true) // decrement in y
  requestAnimationFrame(loop)
} 

loop()
```
### Reset

Reset acceleration and velocity defined with `0`.


```ts
import Gravity from '@Physical'

player = {
  x: 10,
  y: 10,
  width: 30,
  height: 30
}

const gravity = new Gravity(player, 12)


// When any key is pressed called reset
addEventListener('keydown',() => {
  gravity.reset()
})

const loop = () => {
  gravity.vertical() // increment in y

  requestAnimationFrame(loop)
} 

loop()
```

## Types

### TypeData

`x`: horizontal reference

`y`: vertical reference

`width` and `height`: to define the mass

```ts
type TypeData = {
  x: number,
  y: number,
  width: number,
  height: number
}
```