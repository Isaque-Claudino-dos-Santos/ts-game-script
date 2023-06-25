import Engine from '@Vendor/Engine'

const engine = new Engine()
const { canvas } = engine
/*

    35 * 16 = 560
    35 * 9 = 315
*/
const width = window.innerWidth
const height = window.innerHeight
canvas.screenSize(width, height)
canvas.resolution(560, 315)

export default engine
