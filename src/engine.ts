import Engine from '@Vendor/Engine'

const engine = new Engine()
const { canvas } = engine

canvas.screenSize(880, 400)
canvas.resolution(880 / 2, 400 / 2)

export default engine
