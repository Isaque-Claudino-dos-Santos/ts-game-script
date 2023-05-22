import Game from '@Engine/Modules/Game'
import SceneSky from './Scenes/SceneSky'

export default class FlappyBird extends Game {
  sceneSky = new SceneSky(this.engine)

  init = () => this.sceneSky.init()
  update = () => this.sceneSky.update()
  render = () => this.sceneSky.render()
  collided = () => this.sceneSky.collided()
}
