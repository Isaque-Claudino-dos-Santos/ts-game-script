import Rect from './Draw/Rect'
const canvas =
    document.querySelector('canvas') ?? document.createElement('canvas')
const context = canvas.getContext('2d')

canvas.width = 600
canvas.height = 400

if (!context) throw 'Unexpectd Error'

const r1 = new Rect(context)
r1.reposition(10, 10)
r1.resize(30, 30)
r1.render()