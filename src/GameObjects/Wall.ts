import TsGame2D from '../TsGame2D'
import DrawRect from '../TsGame2D/Drawing/DrawRect'
export default class Wall {
    public draw:DrawRect;

    constructor(tsg:TsGame2D) {
        this.draw = tsg.draw.rect({
            x: 150,
            y:100,
            width: 30,
            height: 130,
            color: 'grey'
        }) 
    }

    public render() {
        this.draw.render()
    }
}