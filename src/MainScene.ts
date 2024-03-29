import AbstractScene from '@Vendor/Game2D/AbstractScene'
import ObjectPlayer from './ObjectPlayer'
import ObjectBox from './ObjectBox'

export default class SceneMain extends AbstractScene {
  init = () => {
    this.add('player', ObjectPlayer, 'moving')
    const b1 = this.add('box1', ObjectBox)
    b1.sprite.x(100).y(30).width(56).height(56)
    const b2 = this.add('box2', ObjectBox)
    b2.sprite.x(100).y(125).width(56).height(56)
  }
}
