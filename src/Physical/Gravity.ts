type TypeHorizontalData = { x: number, width: number, height: number }
type TypeVerticalData = { y: number, width: number, height: number }
type TypeData = TypeHorizontalData & TypeVerticalData

export default class Gravity {
  private mass: number = 0
  private acceleration: number = 0
  private velocity: number = 0

  constructor(private readonly data: TypeData, private force: number = 10) { }

  public horizontal(inverted: boolean = false) {
    this.mass = (this.data.width + this.data.height) / 2
    this.acceleration += this.force / this.mass
    this.velocity = this.acceleration

    if (inverted)
      return this.data.x -= this.velocity
    this.data.x += this.velocity
  }

  public vertical(inverted: boolean = false) {
    this.mass = (this.data.width + this.data.height) / 2
    this.acceleration += this.force / this.mass
    this.velocity = this.acceleration

    if (inverted)
      return this.data.y -= this.velocity
    this.data.y += this.velocity
  }

  public reset() {
    this.acceleration = 0
    this.velocity = 0
  }
}

