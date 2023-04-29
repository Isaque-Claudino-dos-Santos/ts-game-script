[ts-2d-game-engine](../README.md) / [Modules](../modules.md) / Rect

# Class: Rect

## Table of contents

### Constructors

- [constructor](Rect.md#constructor)

### Properties

- [color](Rect.md#color)
- [context](Rect.md#context)
- [height](Rect.md#height)
- [rotate](Rect.md#rotate)
- [width](Rect.md#width)
- [x](Rect.md#x)
- [y](Rect.md#y)

### Methods

- [angle](Rect.md#angle)
- [log](Rect.md#log)
- [render](Rect.md#render)
- [reposition](Rect.md#reposition)
- [resize](Rect.md#resize)

## Constructors

### constructor

• **new Rect**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `CanvasRenderingContext2D` |

#### Defined in

[Draw/Rect.ts:9](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L9)

## Properties

### color

• **color**: `string` = `'black'`

#### Defined in

[Draw/Rect.ts:6](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L6)

___

### context

• `Private` `Readonly` **context**: `CanvasRenderingContext2D`

#### Defined in

[Draw/Rect.ts:9](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L9)

___

### height

• **height**: `number` = `0`

#### Defined in

[Draw/Rect.ts:5](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L5)

___

### rotate

• **rotate**: `number` = `0`

#### Defined in

[Draw/Rect.ts:7](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L7)

___

### width

• **width**: `number` = `0`

#### Defined in

[Draw/Rect.ts:4](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L4)

___

### x

• **x**: `number` = `0`

#### Defined in

[Draw/Rect.ts:2](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L2)

___

### y

• **y**: `number` = `0`

#### Defined in

[Draw/Rect.ts:3](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L3)

## Methods

### angle

▸ **angle**(`angle`): [`Rect`](Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[Draw/Rect.ts:23](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L23)

___

### log

▸ **log**(): [`Rect`](Rect.md)

#### Returns

[`Rect`](Rect.md)

#### Defined in

[Draw/Rect.ts:43](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L43)

___

### render

▸ **render**(`type?`): [`Rect`](Rect.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | ``"fill"`` \| ``"stroke"`` | `'fill'` |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[Draw/Rect.ts:28](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L28)

___

### reposition

▸ **reposition**(`x`, `y`): [`Rect`](Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[Draw/Rect.ts:11](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L11)

___

### resize

▸ **resize**(`width`, `height`): [`Rect`](Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`Rect`](Rect.md)

#### Defined in

[Draw/Rect.ts:17](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Draw/Rect.ts#L17)
