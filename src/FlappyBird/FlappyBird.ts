import Game from '@Engine/Modules/Game'
import SceneSky from './Scenes/SceneSky'

export default class FlappyBird extends Game {
  sceneSky = new SceneSky(this.engine)

  init = () => this.sceneSky.callInits()
  update = () => this.sceneSky.callUpdates()
  render = () => this.sceneSky.callRenders()
  collided = () => this.sceneSky.callCollideds()
}
