import Scene from '@Engine/Modules/Scene'
import Bird from '../Objects/Bird'
import Background from '../Objects/Background'
import Pipe from '../Objects/Pipe'

export default class SceneSky extends Scene {
  readonly objects = {
    background: new Background(this.engine),
    bird: new Bird(this.engine),
    pipe: new Pipe(this.engine),
  }

  collided = () => {
    const { bird, pipe } = this.objects
    this.engine.collider.rectWithRect(bird, pipe, () => {
      this.objects.bird.dead()
    })
  }
}
