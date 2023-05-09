import Canvas from '@Display/Canvas'
import KeyBoard from '@Event/Keyboard'
import Loop from '@Event/Loop'
import Mouse from '@Event/Mouse'
import GameObject from './GameObject'

export type TypeCreateGameObjectCallback = (
  gameObject: GameObject,
  game: Game
) => void

export type TypeSocketGameObjectCallback = (
  gameObjects: GameObject[],
  game: Game
) => void

export default class Game {
  public readonly canvas = new Canvas(600, 400)
  public readonly mouse = new Mouse(this.canvas.screen)
  private readonly loop = new Loop()

  private gameObjects: GameObject[] = []

  constructor() {
    this.handleGameObjects()
  }

  private handleGameObjects(): void {
    this.gameObjects.forEach((gameObject) =>
      gameObject.boots.forEach((fn) => fn())
    )

    this.loop.onUpdate = () => {
      this.gameObjects.forEach((gameObject) =>
        gameObject.updates.forEach((fn) => fn())
      )
    }

    this.loop.onRender = () => {
      this.gameObjects.forEach((gameObject) =>
        gameObject.renders.forEach((fn) => fn())
      )
    }

    this.loop.init()
  }

  public keyboard(): KeyBoard {
    return new KeyBoard()
  }

  public createGameObject(callback: TypeCreateGameObjectCallback): number {
    const gameObject = new GameObject()
    callback(gameObject, this)
    this.gameObjects.unshift(gameObject)
    return this.gameObjects.indexOf(gameObject)
  }

  public socketGameObject(
    gameObjectsID: number[],
    callback: TypeSocketGameObjectCallback
  ) {
    const gameObjects = gameObjectsID.map((id) => this.gameObjects[id])
    callback(gameObjects, this)
  }
}
