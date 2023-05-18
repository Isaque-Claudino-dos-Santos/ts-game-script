import Engine from '@Engine/Engine'
import FlappyBird from './FlappyBird/FlappyBird'

const engine = new Engine()

engine.canvas.screenSize(640, 320)
engine.canvas.resolution(640 / 2, 320 / 2)

engine.init(new FlappyBird(engine))
