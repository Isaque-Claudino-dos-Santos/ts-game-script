import Game from '@Game/Game'
import GameObject from './GameObject'

export type TypeCreateGameObjectCallback = (
  gameObject: GameObject,
  game: Game
) => void

export type TypeSocketGameObjectCallback = (
  gameObjects: TypeGameObjects,
  game: Game
) => void
type TypeGameObjectsForFN = (gameObject: GameObject, index: string) => void
type TypeGameObjectsMapFN = (
  gameObject: GameObject,
  index: string
) => GameObject
export type TypeGameObjects = { [index: string]: GameObject }

export default class GameObjectHandler {
  private gameObjects: TypeGameObjects = {}

  constructor(private readonly game: Game) {}

  private gameObjectsFor(callback: TypeGameObjectsForFN) {
    for (const name in this.gameObjects) {
      const gameObject = this.gameObjects[name]
      callback(gameObject, name)
    }
  }

  private gameObjectMapByName(
    names: string[],
    callback: TypeGameObjectsMapFN
  ): TypeGameObjects {
    const items = {}
    names.forEach((name) => {
      items[name] = callback(this.gameObjects[name], name)
    })
    return items
  }

  public GameObjectsCallUpdates() {
    this.gameObjectsFor((o) => o.updates.forEach((u) => u()))
  }

  public GameObjectsCallBoots() {
    this.gameObjectsFor((o) => o.boots.forEach((b) => b()))
  }

  public GameObjectsCallRenders() {
    this.gameObjectsFor((o) => o.renders.forEach((r) => r()))
  }

  public create(callback: TypeCreateGameObjectCallback): GameObject {
    const gameObject = new GameObject()
    callback(gameObject, this.game)
    return gameObject
  }

  public save(name: string, gameObject: GameObject) {
    gameObject.name = name
    this.gameObjects[name] = gameObject
  }

  public socket(callback: TypeSocketGameObjectCallback, names: string[]) {
    const gameObjects = this.gameObjectMapByName(names, (g) => g)
    callback(gameObjects, this.game)
  }
}
