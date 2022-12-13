import TsGame2D from '../../vendor/TsGame2D';

export default class Main {
  public name: string = 'main';

  constructor(private readonly tsg: TsGame2D) {
    tsg.room.create(this.name);
    tsg.room.setLoop(this.name, this.render, this.update);  
    //tsg.room.active(this.name) --> active room?
  }

  public update = () => {};

  public render = () => {};
}