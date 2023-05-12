import Canvas2d from '@Game/Canvas2d'
import Engine from '@Engine/Engine'
import PacMan from './PacMan/PacMan'

const engine = new Engine(new Canvas2d())
engine.game = new PacMan(engine)

engine.window.screen.width = 600
engine.window.screen.height = 450

engine.init()
