import Canvas2d from '@Game/Canvas2d'
import Engine from '@Engine/Engine'
import PacMan from './PacMan/PacMan'

const engine = new Engine(new Canvas2d())
engine.game = new PacMan(engine)
engine.init()
