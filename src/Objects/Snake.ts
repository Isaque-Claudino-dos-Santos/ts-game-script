import TsGame2D from '@TsGame2D/index'
import DrawRect from '../../vendor/TsGame2D/Drawing/DrawRect'
import Timer from '@TsGame2D/Timer'
import Fruit from './Fruit'

export default class Snake {
  private controller = {
    left: 'a',
    top: 'w',
    right: 'd',
    down: 's',
  }

  private stateDirectionMoviment = {
    left: false,
    top: false,
    right: false,
    down: false,
  }

  private target: Fruit
  private movimentTimer: Timer
  readonly sprite: DrawRect

  constructor(private readonly tsg: TsGame2D, private readonly size: number) {
    this.sprite = this.tsg.draw.rect({
      width: this.size,
      height: this.size,
      color: 'blue',
    })

    this.movimentTimer = tsg.time()
    this.movimentTimer.start()
  }

  setTarget(target: Fruit): void {
    this.target = target
  }

  private resetStateDirectionMoviment(): void {
    this.stateDirectionMoviment = {
      left: false,
      top: false,
      right: false,
      down: false,
    }
  }

  private onMoviment(): void {
    const { check } = this.tsg.keyBoard.click
    const { down, left, right, top } = this.stateDirectionMoviment

    if (check(this.controller.right) && !left) {
      this.resetStateDirectionMoviment()
      this.stateDirectionMoviment.right = true
    }
    if (check(this.controller.left) && !right) {
      this.resetStateDirectionMoviment()
      this.stateDirectionMoviment.left = true
    }
    if (check(this.controller.top) && !down) {
      this.resetStateDirectionMoviment()
      this.stateDirectionMoviment.top = true
    }
    if (check(this.controller.down) && !top) {
      this.resetStateDirectionMoviment()
      this.stateDirectionMoviment.down = true
    }

    if (this.movimentTimer.near(0.5)) {
      if (right) this.sprite.x += this.size
      if (left) this.sprite.x -= this.size
      if (top) this.sprite.y -= this.size
      if (down) this.sprite.y += this.size
      this.movimentTimer.reset()
    }
  }

  private onCollectTarget(): void {
    if (typeof this.target === 'undefined') return
    this.tsg.collider.rect.touch(this.sprite, this.target.sprite, () => {
      this.target = undefined
    })
  }

  update(): void {
    this.onMoviment()
    this.onCollectTarget()
  }

  render(): void {
    this.sprite.render()
    if (typeof this.target !== 'undefined') this.target.render()
  }
}
