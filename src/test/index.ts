import Game from 'Game'
import Background from './Background'
import Player from './Player'

const game = new Game()
const { loop } = game

const player = new Player(game)
const background = new Background(game)

background.player = player

player.boot()
background.boot()

loop.onUpdate = () => {
  player.update()
}

loop.onRender = () => {
  background.render()
  player.render()
}

loop.init()
