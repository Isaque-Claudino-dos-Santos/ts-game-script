import Engine from '@Engine/Engine'
import FlappyBird from './FlappyBird/FlappyBird'

const engine = new Engine()

engine.canvas.screenSize(760, 350)
engine.canvas.resolution(760 / 3, 350 / 3)

engine.init(new FlappyBird(engine))
