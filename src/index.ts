import Rect from '@Draw/Rect'
import { TypeMouseActions } from '@Event/Mouse'
import GameObject from '@Game/GameObject'
import Game from 'Game'

const game = new Game()
const { loop } = game

class Player extends GameObject {
  public isDown = false

  constructor(game: Game) {
    super(game)
  }

  readonly body = new Rect(this.game.canvas.context)
    .resize(30, 30)
    .reposition(30, 30)
    .setColor('#aa00ff')

  mouse0: TypeMouseActions = {
    onDown: () => {
      this.isDown = true
    },
  }

  public boot = () => {
    this.keyboard
      .create('KeyD', () => (player.body.x += 4))
      .create('KeyS', () => (player.body.y += 4))
      .create('KeyW', () => (player.body.y -= 4))
      .create('KeyA', () => (player.body.x -= 4))
    this.game.mouse.addEvents(this.body, 0, this.mouse0)
  }

  public update = () => {
    this.keyboard
      .checkPress('KeyD')
      .checkPress('KeyS')
      .checkPress('KeyW')
      .checkPress('KeyA')
  }

  public render = () => {
    this.body.render()
  }
}

class Background extends GameObject {
  constructor(game: Game) {
    super(game)
  }

  body = new Rect(this.game.canvas.context)
    .resize(this.game.canvas.screen.width, this.game.canvas.screen.height)
    .setColor('#232323')

  public mouse0: TypeMouseActions = {
    onUp: () => {
      player.isDown = false
    },
    onMove: (mouse) => {
      if (player.isDown) {
        player.body.x = mouse.x - player.body.width / 2
        player.body.y = mouse.y - player.body.height / 2
      }
    },
  }

  public boot = () => {
    this.game.mouse.addEvents(this.body, 0, this.mouse0)
  }
  public update = () => {}
  public render = () => {
    this.body.render()
  }
}

const player = new Player(game)
const background = new Background(game)

player.boot()
background.boot()

loop.onUpdate = () => {
  player.update()
}

loop.onRender = () => {
  background.render()
  player.render()
}

loop.init()
