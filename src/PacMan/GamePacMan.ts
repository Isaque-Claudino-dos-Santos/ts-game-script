import Game from '@Game/Game'
import Player from './Player'
import Background from './Background'
import Wall from './Wall'
import Tree from './Tree'
import Boll from './Boll'

export default class GamePacMan extends Game {
  obj = {
    background: new Background(this.engine),
    player: new Player(this.engine),
    wall: new Wall(this.engine),
    tree: new Tree(this.engine),
    boll: new Boll(this.engine),
  }

  private msgGameInit() {
    console.log(
      `%c-----------------------
🎮 Game Initialized 🎮
-----------------------`,
      'font-size: 30px; color:green; background:#111111;'
    )
  }

  override init = () => {
    this.msgGameInit()
  }

  override update = () => {
    this.obj.player.update()
    this.obj.wall.update()
    this.obj.tree.update()
  }

  override render = () => {
    this.obj.background.render()
    this.obj.player.render()
    this.obj.wall.render()
    this.obj.tree.render()
    this.obj.boll.render()
  }
}
