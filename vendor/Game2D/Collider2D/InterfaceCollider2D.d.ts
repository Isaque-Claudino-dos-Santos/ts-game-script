import AbstractGameObject from '../AbstractGameObject'
import HandlerScenes from '../HandlerScenes'

export type ColliderData = {
  overlapX: number
  overlapY: number
  distanceX: number
  distanceY: number
}

export type ColliderResolve = (data: ColliderData) => void

export default interface InterfaceCollider2D {
  readonly object: AbstractGameObject
  readonly scenes: HandlerScenes

  placeMeeting(
    x: number,
    y: number,
    obj: { new (): AbstractGameObject } | string
  ): boolean
}
