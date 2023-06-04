import TypeKeyboardCode from '@Vendor/Types/TypeKeyboardCodes'
import TypeKeyboardKey from '@Vendor/Types/TypeKeyboardKey'

export default interface InterfaceKeyboard {
  readonly keys: TypeKeyboardKey
  check(vk: TypeKeyboardCode): number
  lockKey(vk: TypeKeyboardCode): void
}
