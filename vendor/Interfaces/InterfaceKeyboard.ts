import TypeKeyboardCodes from '@Vendor/Types/TypeKeyboardCodes'
import TypeKeyboardKeys from '@Vendor/Types/TypeKeyboardKeys'

export default interface InterfaceKeyboard {
  readonly keys: TypeKeyboardKeys
  check(vk: TypeKeyboardCodes): number
  lockKey(vk: TypeKeyboardCodes): void
}
