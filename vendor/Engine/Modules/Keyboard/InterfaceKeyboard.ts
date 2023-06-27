import { TypeKeyboardCode, TypeKeyboardKeys } from './TypesKeyboard'

export default interface InterfaceKeyboard {
  readonly keys: TypeKeyboardKeys
  check(vk: TypeKeyboardCode): 1 | 0
  lockKey(vk: TypeKeyboardCode): void
}
