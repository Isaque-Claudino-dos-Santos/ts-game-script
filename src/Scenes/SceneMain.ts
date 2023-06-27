import ObjectPlayer from '../Objects/ObjectPlayer'
import ObjectBackground from '../Objects/ObjectBackground'
import ObjectWall from '../Objects/ObjectWall'
import Scene from '@Vendor/Models/Scene'
import { TypeSceneObjects } from '@Vendor/Models/Scene/TypesScene'

export default class SceneMain extends Scene {
  objects: TypeSceneObjects = {
    background: new ObjectBackground(this.engine),
    wall1: new ObjectWall(this.engine),
    player: new ObjectPlayer(this.engine),
  }
}
