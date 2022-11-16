import { InterfaceShapeImage } from '../../Types/Shapes';

export default class ShapeImage implements InterfaceShapeImage {
  typeShape: string = 'Image';
  sourceImage: HTMLImageElement;

  constructor(
    public path: string,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public imageX: number = 0,
    public imageY: number = 0,
    public imageWidth: number = 32,
    public imageHeight: number = 32
  ) {
    this.setImage();
  }

  setImage() {
    this.sourceImage = new Image();
    this.sourceImage.src = this.path;
  }
}
