import TsGame2D from '../../vendor/TsGame2D';
import DrawRect from '../../vendor/TsGame2D/Drawing/DrawRect';
import Fruit from './Fruit';

export default class Snake {
  public readonly body: DrawRect;

  private controller = {
    left: 'a',
    top: 'w',
    right: 'd',
    down: 's',
  };

  private stateDirectionMoviment = {
    left: false,
    top: false,
    right: false,
    down: false,
  };

  private movimentTime = 0;

  private target: Fruit;

  constructor(private readonly tsg: TsGame2D, private readonly size: number) {
    this.body = this.tsg.draw.rect({
      width: this.size,
      height: this.size,
      color: 'blue',
    });
  }

  public setTarget(target: Fruit): void {
    this.target = target;
  }

  private resetStateDirectionMoviment(): void {
    this.stateDirectionMoviment = {
      left: false,
      top: false,
      right: false,
      down: false,
    };
  }

  private onMoviment(): void {
    const { check } = this.tsg.keyBoard.click;
    const { down, left, right, top } = this.stateDirectionMoviment;

    if (check(this.controller.right) && !left) {
      this.resetStateDirectionMoviment();
      this.stateDirectionMoviment.right = true;
    }
    if (check(this.controller.left) && !right) {
      this.resetStateDirectionMoviment();
      this.stateDirectionMoviment.left = true;
    }
    if (check(this.controller.top) && !down) {
      this.resetStateDirectionMoviment();
      this.stateDirectionMoviment.top = true;
    }
    if (check(this.controller.down) && !top) {
      this.resetStateDirectionMoviment();
      this.stateDirectionMoviment.down = true;
    }

    if (this.movimentTime >= 10) {
      if (right) this.body.x += this.size;
      if (left) this.body.x -= this.size;
      if (top) this.body.y -= this.size;
      if (down) this.body.y += this.size;
      this.movimentTime = 0;
    } else this.movimentTime++;
  }

  private onCollectTarget(): void {
    if (typeof this.target === 'undefined') return;
    this.tsg.collider.rect.touch(this.body, this.target.body, () => {
      this.body.color = 'yellow';
    });
  }

  public update(): void {
    this.onMoviment();
    this.onCollectTarget();
  }

  public render(): void {
    this.body.render();
    if (typeof this.target !== 'undefined') this.target.render();
  }
}
