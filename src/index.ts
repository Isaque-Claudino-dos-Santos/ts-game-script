import Engine from '@Engine/Engine'
import TestGame from './Tests/TestGame'

const engine = new Engine()

engine.canvas.screenSize(760, 350)
engine.canvas.resolution(760 / 2, 350 / 2)

engine.init(new TestGame(engine))
