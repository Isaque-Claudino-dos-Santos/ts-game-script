import Scene from '@Engine/Modules/Scene'
import Bird from '../Objects/Bird'
import Background from '../Objects/Background'

export default class SceneSky extends Scene {
  readonly objects = {
    background: new Background(this.engine),
    bird: new Bird(this.engine),
  }
}
