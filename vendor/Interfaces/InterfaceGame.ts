import Engine from '@Engine/Engine'
import InterfaceGameLoop from '@Engine/Interfaces/InterfaceGameLoop'

type Types = InterfaceGameLoop

export default interface InterfaceGame extends Types {
  engine: Engine
}
