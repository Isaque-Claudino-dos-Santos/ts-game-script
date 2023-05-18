import Engine from '@Engine/Engine'
import TestGame from './Tests/TestGame'

const engine = new Engine()

engine.canvas.screenSize(760, 350)
engine.canvas.resolution(760 / 3, 350 / 3)

engine.init(new TestGame(engine))
