import Game from '@Game/Game'
import GameObject from './GameObject'

export type TypeCreateGameObjectCallback = (
  gameObject: GameObject,
  game: Game
) => void

export type TypeSocketGameObjectCallback = (
  gameObjects: GameObject[],
  game: Game
) => void

export type TypeGameObjectArray = GameObject[]

export default class GameObjectHandler {
  private readonly gameObjects: TypeGameObjectArray = []

  constructor(private readonly game: Game) {}

  public GameObjectsCallUpdates() {
    this.gameObjects.forEach((o) => o.updates.forEach((u) => u()))
  }

  public GameObjectsCallBoots() {
    this.gameObjects.forEach((o) => o.boots.forEach((b) => b()))
  }

  public GameObjectsCallRenders() {
    this.gameObjects.forEach((o) => o.renders.forEach((r) => r()))
  }

  public create(
    callback: TypeCreateGameObjectCallback,
    index: number | null = null
  ): number {
    const gameObject = new GameObject()
    callback(gameObject, this.game)
    if (index) {
      gameObject.index = index
      this.gameObjects[index] = gameObject
      return index
    }
    this.gameObjects.push(gameObject)
    return this.gameObjects.indexOf(gameObject)
  }

  public socket(
    gameObjectsID: number[],
    callback: TypeSocketGameObjectCallback
  ) {
    const gameObjects = gameObjectsID.map((id) => this.gameObjects[id])
    callback(gameObjects, this.game)
  }
}
