import Engine from '@Vendor/Engine'
import InterfaceLoop from '@Vendor/Interfaces/InterfaceLoop'

export default interface InterfaceGame extends InterfaceLoop {
  engine: Engine
}
