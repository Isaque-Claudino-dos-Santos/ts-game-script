import Scene from '@Vendor/Models/Scene'
import TypeSceneObjects from '@Vendor/Types/TypeSceneObjects'
import Bird from '../Objects/Bird'
import BG from '../Objects/BG'

export default class SceneMain extends Scene {
  objects: TypeSceneObjects = {
    bg: new BG(this.engine),
    bird: new Bird(this.engine),
  }
}
