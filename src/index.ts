import Engine from '@Engine/Engine'
import FlappyBird from './FlappyBird/FlappyBird'

const engine = new Engine()

engine.canvas.screenSize(640, 384)
engine.canvas.resolution(640 * 6, 384 * 6)

engine.init(new FlappyBird(engine))
