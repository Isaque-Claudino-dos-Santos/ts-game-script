import AbstractScene from '@Vendor/Game2D/AbstractScene'
import ObjectPlayer from './ObjectPlayer'
import ObjectBox from './ObjectBox'

export default class SceneMain extends AbstractScene {
  init = () => {
    this.add('player', ObjectPlayer, () => {}, 'moving')
    this.add('box1', ObjectBox, (o) => {
      o.sprite.x(100).y(30).width(20).height(30)
    })
    this.add('box2', ObjectBox, (o) => {
      o.sprite.x(10).y(100)
    })
  }
}
