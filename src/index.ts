import Engine from '@Engine/Engine'
import GamePacMan from './PacMan/GamePacMan'

const engine = new Engine()

engine.canvas.screenSize(550, 350)

engine.init(new GamePacMan(engine))
