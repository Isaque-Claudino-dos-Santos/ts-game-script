import Engine from '@Engine/Engine'
import TestGame from './Tests/TestGame'

const engine = new Engine()

engine.canvas.screenSize(550, 350)
engine.canvas.resolution(550 / 2, 350 / 2)

engine.init(new TestGame(engine))
