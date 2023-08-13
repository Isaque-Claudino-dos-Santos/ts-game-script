import AbstractScene, { SceneObjects } from '@Vendor/Game2D/AbstractScene'
import ObjectPlayer from './ObjectPlayer'
import ObjectBox from './ObjectBox'

export default class SceneMain extends AbstractScene {
  objects: SceneObjects = {
    player: new ObjectPlayer(this.game),
    box: new ObjectBox(this.game, { x: 100, y: 44 }),
  }
}
