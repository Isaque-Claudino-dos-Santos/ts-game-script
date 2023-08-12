import AbstractScene, { SceneObjects } from '@Vendor/Game2D/AbstractScene'
import ObjectPlayer from './ObjectPlayer'

export default class SceneMain extends AbstractScene {
  objects: SceneObjects = {
    player: new ObjectPlayer(this.game),
  }
}
