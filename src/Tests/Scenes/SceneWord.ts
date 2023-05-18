import Object from '@Engine/Modules/Object'
import Scene from '@Engine/Modules/Scene'
import TypeSprite from '@Engine/Types/TypeSprite'
import Background from '../Background'
import Player from '../Player'

export default class SceneWord extends Scene {
  objects: Object<TypeSprite>[] = [
    new Background(this.engine),
    new Player(this.engine),
  ]
}
