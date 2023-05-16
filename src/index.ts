import Engine from '@Engine/Engine'
import TestGame from './Tests/TestGame'

const engine = new Engine()

engine.canvas.screenSize(550, 350)

engine.init(new TestGame(engine))
