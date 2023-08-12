import { KeyboardCode, KeyboardKeys } from './TypesKeyboard'

export default interface InterfaceKeyboard {
  readonly keys: KeyboardKeys
  check(vk: KeyboardCode): 1 | 0
  lockKey(vk: KeyboardCode): void
}
