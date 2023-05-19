import Engine from '@Engine/Engine'
import FlappyBird from './FlappyBird/FlappyBird'

const engine = new Engine()

engine.canvas.screenSize(640, 384)
engine.canvas.resolution(640 * 3, 384 * 3)

engine.init(new FlappyBird(engine))
