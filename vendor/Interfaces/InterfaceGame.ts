import Engine from '@Vendor/Engine'
import InterfaceGameLoop from '@Vendor/Interfaces/InterfaceGameLoop'

type Types = InterfaceGameLoop

export default interface InterfaceGame extends Types {
  engine: Engine
}
