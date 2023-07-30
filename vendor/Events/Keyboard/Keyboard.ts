import InterfaceKeyboard from './InterfaceKeyboard'
import { TypeKeyboardCode, TypeKeyboardKeys } from './TypesKeyboard'

export default class Keyboard implements InterfaceKeyboard {
  readonly keys: TypeKeyboardKeys = {
    KeyA: {
      isDown: false,
      locked: false,
    },
    KeyB: {
      isDown: false,
      locked: false,
    },
    KeyC: {
      isDown: false,
      locked: false,
    },
    KeyD: {
      isDown: false,
      locked: false,
    },
    KeyE: {
      isDown: false,
      locked: false,
    },
    KeyF: {
      isDown: false,
      locked: false,
    },
    KeyG: {
      isDown: false,
      locked: false,
    },
    KeyH: {
      isDown: false,
      locked: false,
    },
    KeyI: {
      isDown: false,
      locked: false,
    },
    KeyJ: {
      isDown: false,
      locked: false,
    },
    KeyK: {
      isDown: false,
      locked: false,
    },
    KeyL: {
      isDown: false,
      locked: false,
    },
    KeyM: {
      isDown: false,
      locked: false,
    },
    KeyN: {
      isDown: false,
      locked: false,
    },
    KeyO: {
      isDown: false,
      locked: false,
    },
    KeyP: {
      isDown: false,
      locked: false,
    },
    KeyQ: {
      isDown: false,
      locked: false,
    },
    KeyR: {
      isDown: false,
      locked: false,
    },
    KeyS: {
      isDown: false,
      locked: false,
    },
    KeyT: {
      isDown: false,
      locked: false,
    },
    KeyU: {
      isDown: false,
      locked: false,
    },
    KeyV: {
      isDown: false,
      locked: false,
    },
    KeyW: {
      isDown: false,
      locked: false,
    },
    KeyX: {
      isDown: false,
      locked: false,
    },
    KeyY: {
      isDown: false,
      locked: false,
    },
    KeyZ: {
      isDown: false,
      locked: false,
    },
    Digit0: {
      isDown: false,
      locked: false,
    },
    Digit1: {
      isDown: false,
      locked: false,
    },
    Digit2: {
      isDown: false,
      locked: false,
    },
    Digit3: {
      isDown: false,
      locked: false,
    },
    Digit4: {
      isDown: false,
      locked: false,
    },
    Digit5: {
      isDown: false,
      locked: false,
    },
    Digit6: {
      isDown: false,
      locked: false,
    },
    Digit7: {
      isDown: false,
      locked: false,
    },
    Digit8: {
      isDown: false,
      locked: false,
    },
    Digit9: {
      isDown: false,
      locked: false,
    },
    Space: {
      isDown: false,
      locked: false,
    },
    Enter: {
      isDown: false,
      locked: false,
    },
    Tab: {
      isDown: false,
      locked: false,
    },
    Escape: {
      isDown: false,
      locked: false,
    },
    Backspace: {
      isDown: false,
      locked: false,
    },
    ShiftLeft: {
      isDown: false,
      locked: false,
    },
    ControlLeft: {
      isDown: false,
      locked: false,
    },
    AltLeft: {
      isDown: false,
      locked: false,
    },
    Delete: {
      isDown: false,
      locked: false,
    },
    Insert: {
      isDown: false,
      locked: false,
    },
    Home: {
      isDown: false,
      locked: false,
    },
    End: {
      isDown: false,
      locked: false,
    },
    PageUp: {
      isDown: false,
      locked: false,
    },
    PageDown: {
      isDown: false,
      locked: false,
    },
    ArrowUp: {
      isDown: false,
      locked: false,
    },
    ArrowDown: {
      isDown: false,
      locked: false,
    },
    ArrowLeft: {
      isDown: false,
      locked: false,
    },
    ArrowRight: {
      isDown: false,
      locked: false,
    },
    F1: {
      isDown: false,
      locked: false,
    },
    F2: {
      isDown: false,
      locked: false,
    },
    F3: {
      isDown: false,
      locked: false,
    },
    F4: {
      isDown: false,
      locked: false,
    },
    F5: {
      isDown: false,
      locked: false,
    },
    F6: {
      isDown: false,
      locked: false,
    },
    F7: {
      isDown: false,
      locked: false,
    },
    F8: {
      isDown: false,
      locked: false,
    },
    F9: {
      isDown: false,
      locked: false,
    },
    F10: {
      isDown: false,
      locked: false,
    },
    F11: {
      isDown: false,
      locked: false,
    },
    F12: {
      isDown: false,
      locked: false,
    },
  }

  constructor() {
    addEventListener('keydown', (e) => {
      const code = e.code as TypeKeyboardCode
      const key = this.keys[code]
      if (!key.locked) {
        key.isDown = true
      }
    })
    addEventListener('keyup', (e) => {
      const { code } = e
      const key = this.keys[code]
      key.isDown = false
      key.locked = false
    })
  }

  lockKey(vk: TypeKeyboardCode): void {
    this.keys[vk].isDown = false
    this.keys[vk].locked = true
  }

  check(vk: TypeKeyboardCode): 1 | 0 {
    return this.keys[vk].isDown ? 1 : 0
  }
}
