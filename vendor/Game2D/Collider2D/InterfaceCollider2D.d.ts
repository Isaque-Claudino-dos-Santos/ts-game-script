import AbstractGameObject from '../AbstractGameObject'
import AbstractScene from '../AbstractScene'

export type ColliderData = {
  overlapX: number
  overlapY: number
  distanceX: number
  distanceY: number
}
export type ColliderResolve<Obj extends AbstractGameObject> = (
  obj: Obj,
  data: ColliderData
) => void

export default interface InterfaceCollider2D {
  readonly scene: AbstractScene
  rect(
    obj1: AbstractGameObject,
    objInScene: string,
    resolve: ColliderResolve<AbstractGameObject>
  ): void
}
