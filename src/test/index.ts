import { game } from './game'
import player from './player'
import background from './background'

game.gameObject.save(background).save(player)

player.update(() => {
  background.keyboard.checkClick('Space')
})

game.init()
