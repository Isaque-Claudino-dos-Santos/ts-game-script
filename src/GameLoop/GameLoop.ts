import InterfaceGameLoop from './InterfaceGameLoop'
export default class GameLoop implements InterfaceGameLoop {

    public onStart: () => void;
    public onRender: () => void;
    public onUpdate: () => void;
    public onEnd: () => void;
    
    constructor() {
        this.onStart()
        this.loop()
        this.onEnd()
    }   

    private loop() {
        this.onUpdate()
        this.onRender()
        requestAnimationFrame(this.loop)
    }
}