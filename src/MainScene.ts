import AbstractScene from '@Vendor/Game2D/AbstractScene'
import ObjectPlayer from './ObjectPlayer'
import ObjectBox from './ObjectBox'

export default class SceneMain extends AbstractScene {
  init(): void {
    this.add('player', ObjectPlayer, 'moving')
    const box1 = this.add('box1', ObjectBox)

    box1.sprite.x(100).y(30)
  }
}
