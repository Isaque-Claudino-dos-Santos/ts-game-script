import Canvas from '@Display/Canvas'
import Loop from '@Event/Loop'
import Mouse from '@Event/Mouse'
import GameObject from './GameObjectHandler'
import GameObjectHandler from './GameObjectHandler'

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

  public readonly gameObject = new GameObjectHandler(this)

  constructor() {
    this.handleGameObjectsAndCallMethodsInLoop()
  }

  private handleGameObjectsAndCallMethodsInLoop(): void {
    this.gameObject.GameObjectsCallBoots()

    this.loop.onUpdate = () => {
      this.gameObject.GameObjectsCallUpdates()
    }

    this.loop.onRender = () => {
      this.gameObject.GameObjectsCallRenders()
    }

    this.loop.init()
  }
}
