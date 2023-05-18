import Object from '@Engine/Modules/Object'
import Scene from '@Engine/Modules/Scene'
import TypeSprite from '@Engine/Types/TypeSprite'
import Bird from '../Objects/Bird'
import Background from '../Objects/Background'

export default class SceneSky extends Scene {
  readonly objects: Object<TypeSprite>[] = [
    new Bird(this.engine),
    new Background(this.engine),
  ]
}
