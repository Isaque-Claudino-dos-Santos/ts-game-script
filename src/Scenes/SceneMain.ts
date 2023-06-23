import Scene from '@Vendor/Models/Scene'
import TypeSceneObjects from '@Vendor/Types/TypeSceneObjects'
import ObjectPlayer from '../Objects/ObjectPlayer'
import ObjectBackground from '../Objects/ObjectBackground'
import ObjectWall from '../Objects/ObjectWall'

export default class SceneMain extends Scene {
  objects: TypeSceneObjects = {
    background: new ObjectBackground(this.engine),
    wall1: new ObjectWall(this.engine),
    player: new ObjectPlayer(this.engine, this),
  }
}
