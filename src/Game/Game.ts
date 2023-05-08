import Canvas from '@Display/Canvas'
import KeyBoard from '@Event/Keyboard'
import Loop from '@Event/Loop'
import Mouse from '@Event/Mouse'
import GameObject from './GameObject'

export default class Game {
  public readonly canvas = new Canvas(600, 400)
  public readonly mouse = new Mouse(this.canvas.screen)
  private readonly loop = new Loop()

  private gameObjects: GameObject[] = []

  constructor() {
    this.handleGameObjects()
  }

  private handleGameObjects() {
    this.gameObjects.forEach((gameObject) => gameObject.boot())

    this.loop.onUpdate = () =>
      this.gameObjects.forEach((gameObject) => gameObject.update())
    this.loop.onRender = () =>
      this.gameObjects.forEach((gameObject) => gameObject.render())

    this.loop.init()
  }

  public keyboard(): KeyBoard {
    return new KeyBoard()
  }

  public createGameObject(
    callback: (gameObject: GameObject, game: Game) => void
  ): number {
    const gameObject = new GameObject()
    callback(gameObject, this)
    return this.gameObjects.unshift(gameObject)
  }
}
