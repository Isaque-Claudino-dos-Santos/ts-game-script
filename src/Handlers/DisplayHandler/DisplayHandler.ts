import Canvas from "../../Canvas";

export default class DisplayHandler {
  readonly canvas:HTMLCanvasElement;
  constructor() {
     this.canvas = new Canvas().element;

  }
}
