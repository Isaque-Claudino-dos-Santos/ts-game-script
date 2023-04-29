[ts-2d-game-engine](../README.md) / [Modules](../modules.md) / Canvas

# Class: Canvas

## Table of contents

### Constructors

- [constructor](Canvas.md#constructor)

### Properties

- [context](Canvas.md#context)
- [screen](Canvas.md#screen)

### Methods

- [getCanvasContext2D](Canvas.md#getcanvascontext2d)

## Constructors

### constructor

• **new Canvas**(`width?`, `height?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `300` |
| `height` | `number` | `300` |

#### Defined in

[Display/Canvas.ts:5](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Display/Canvas.ts#L5)

## Properties

### context

• `Readonly` **context**: `CanvasRenderingContext2D`

#### Defined in

[Display/Canvas.ts:3](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Display/Canvas.ts#L3)

___

### screen

• `Readonly` **screen**: `HTMLCanvasElement`

#### Defined in

[Display/Canvas.ts:2](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Display/Canvas.ts#L2)

## Methods

### getCanvasContext2D

▸ `Private` **getCanvasContext2D**(`canvas`): `CanvasRenderingContext2D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[Display/Canvas.ts:13](https://github.com/Isaque-Claudino-dos-Santos/ts-game-script/blob/2a7898a/src/Display/Canvas.ts#L13)
