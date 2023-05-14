import TypeVK from '@Engine/Types/TypeVK'

export type TypeKeyboardKey = {
  isDown: boolean
  locked: boolean
}
export type TypeKeyboardKeys = {
  [index in TypeVK]: TypeKeyboardKey
}

export default interface InterfaceKeyboard {
  readonly keys: TypeKeyboardKeys
  check(vk: TypeVK): Boolean
  lockKey(vk: TypeVK): void
}
