import Object from '@Engine/Modules/Object'
import Scene from '@Engine/Modules/Scene'
import TypeSprite from '@Engine/Types/TypeSprite'
import Bird from '../Objects/Bird'
import Background from '../Objects/Background'
import Pipe from '../Objects/Pipe'

export default class SceneSky extends Scene {
  readonly objects: Object<TypeSprite>[] = [
    new Background(this.engine),
    new Bird(this.engine),
    new Pipe(this.engine),
  ]
}
