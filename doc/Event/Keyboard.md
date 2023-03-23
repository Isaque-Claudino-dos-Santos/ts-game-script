- [Home](../../README.md)

# Keyboard

create keyboard events in game

- [Keyboard](#keyboard)
  - [Instance](#instance)
  - [Methods](#methods)
    - [logKeyCode](#logkeycode)
    - [Create](#create)
    - [CheckPress](#checkpress)
    - [CheckClick](#checkclick)

## Instance

```ts
  import Keyborad from '@Event/Keyboard'

  const keyboard = new KeyBoard()
```

## Methods

### logKeyCode

This method show in console the key code valids Example: Which on click key D in keyboard show in console `KeyD`. This code is used in param code from method.

Return: `void`

```ts
  import Keyborad from '@Event/Keyboard'

  const keyboard = new KeyBoard()

  keyboard.logKeyCode()
```

### Create

`Create` is method to define event.

| Params  | Type          |
| ------- | ------------- |
| `code`  | string        |
| `event` | arrowFunction |

Return: `Void`

```ts
  import Keyborad from '@Event/Keyboard'

  const keyboard = new KeyBoard()

  keyboard.create('KeyD',() => {
    console.log('Hello Word')
  })
```
The method in param is defined but not is called, to execute method is required use checking methods in [`loop`](../Display/Loop.md) event.

### CheckPress

The `checkPress` is checking methods used in event loop [`loop`](../Display/Loop.md) when called will check if the key is down, if `TRUE` will called contantly `action` method defined in [`create`](#create) method.

| Param  | Type   |
| ------ | ------ |
| `code` | string |

Return: `Void`

```ts
  import Keyborad from '@Event/Keyboard'

  const keyboard = new KeyBoard()

  keyboard.create('KeyD',() => {
    console.log('Hello Word')
  })

  //Simple loop event
  const loop = () => {
    keyboard.checkPress('KeyD') //Output in console:  Hello Word

    requestAnimationFrame(loop)
  }

  loop()
```

### CheckClick

The `CheckClick` is similar of the [`checkPress`](#checkpress) but when key is down the method `action` will excuted once. 

| Param  | Type   |
| ------ | ------ |
| `code` | string |

Return: `Void`

```ts
  import Keyborad from '@Event/Keyboard'

  const keyboard = new KeyBoard()

  keyboard.create('KeyA',() => {
    console.log('Hello Word')
  })

  //Simple loop event
  const loop = () => {
    keyboard.checkClick('KeyA') //Output in console:  Hello Word

    requestAnimationFrame(loop)
  }

  loop()
```