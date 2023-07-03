import Object from '../Object'

export type TypeCollidedResolution = (object: Object) => void

export enum EnumColliderType {
  STATIC,
  MOVING,
}
