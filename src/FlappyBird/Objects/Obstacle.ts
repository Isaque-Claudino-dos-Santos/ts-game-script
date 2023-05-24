import BoundingBox from '@Engine/BoundingBox'
import MixDraw from '@Engine/Draw/MixDraw'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'
import TypeSprite from '@Engine/Types/TypeSprite'
import Pipe from './Pipe'

export default class Obstacle extends Object<MixDraw> {
  sprite: MixDraw = new MixDraw()
  boundingBox: BoundingBox<TypeSprite> = new BoundingBox(this, new Rect())

  pipeTop = new Pipe(this.engine)
  pipeBottom = new Pipe(this.engine)
  pass = new Pipe(this.engine)

  speed = 10

  init = () => {
    const { canvas } = this.engine
    const defaultWidth = 300
    const bootX = canvas.width() - defaultWidth
    const halfCanvasheight = canvas.height() / 2
    const randomPipeY =
      halfCanvasheight - Math.floor(Math.random() * halfCanvasheight)
    const passSpace = 900

    this.pipeTop.sprite
      .resize(defaultWidth, randomPipeY)
      .setColor('red')
      .fixTo(0, 0)

    this.pass.sprite
      .resize(defaultWidth, passSpace)
      .setColor('blue')
      .fixTo(0, this.pipeTop.sprite.height)

    this.pipeBottom.sprite
      .resize(defaultWidth, halfCanvasheight * 2)
      .setColor('red')
      .fixTo(0, this.pipeTop.sprite.height + this.pass.sprite.height)

    this.sprite.x = bootX

    this.sprite.add(this.pipeTop)
    this.sprite.add(this.pipeBottom)
    this.sprite.add(this.pass)
  }

  update = () => {
    this.sprite.addX(-this.speed)
    this.sprite.callUpdates()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
