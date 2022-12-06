import TsGame2D from "../TsGame2D";
import DrawArc from "../TsGame2D/Drawing/DrawArc";
export default class Bullet {
  public readonly draw: DrawArc;
  public catX: number;
  public catY: number;

  constructor(private tsg: TsGame2D) {
    this.draw = this.tsg.draw.arc({
      color: "purple",
      x: 100,
      y: 100,
      radius: 3,
    });
  }

  public goToTarget() {
    //inplement go to target    
  }

  public render(): void {
    this.draw.render();
  }
}
