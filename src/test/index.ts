import { game, gameObject } from './game'
import player from './player'
import background from './background'

gameObject.save(background).save(player)

player.update(() => {
  background.keyboard.checkClick('Space')
})

game.init()
