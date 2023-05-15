import Player from './Player'
import Background from './Background'
import Wall from './Wall'
import Tree from './Tree'
import Boll from './Boll'
import Game from '@Engine/Modules/Game'

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
    this.obj.player.init()
  }

  override update = () => {
    this.obj.player.update()
    this.obj.wall.update()
    this.obj.tree.update()
    this.engine.collider.arcWithRect(this.obj.player, this.obj.wall, (t) =>
      this.obj.player.wallCollider(t)
    )
  }

  override render = () => {
    this.obj.background.render()
    this.obj.player.render()
    this.obj.wall.render()
    this.obj.tree.render()
    this.obj.boll.render()
  }
}
