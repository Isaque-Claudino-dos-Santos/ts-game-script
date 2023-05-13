import Engine from '@Engine/Engine'
import InterfaceGameLoop from './InterfaceGameLoop'

type Types = InterfaceGameLoop

export default interface InterfaceGame extends Types {
  engine: Engine | undefined
}
