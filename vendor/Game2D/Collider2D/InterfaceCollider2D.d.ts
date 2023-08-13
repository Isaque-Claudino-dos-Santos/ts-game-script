import AbstractGameObject from '../AbstractGameObject'

export type ColliderData = {
  overlapX: number
  overlapY: number
  distanceX: number
  distanceY: number
}
export type ColliderResolve = (
  obj: AbstractGameObject,
  data: ColliderData
) => void

export default interface InterfaceCollider2D {
  rect(
    obj1: AbstractGameObject,
    obj2: AbstractGameObject,
    resolve: ColliderResolve
  ): void
}
