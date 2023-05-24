import Scene from '@Engine/Modules/Scene'
import Bird from '../Objects/Bird'
import Background from '../Objects/Background'
import Obstacle from '../Objects/Obstacle'

export default class SceneSky extends Scene {
  readonly objects = {
    background: new Background(this.engine),
    bird: new Bird(this.engine),
    obstracle1: new Obstacle(this.engine),
  }
}
