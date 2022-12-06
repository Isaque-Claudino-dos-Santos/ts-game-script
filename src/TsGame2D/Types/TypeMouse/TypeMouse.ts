import TypeAxis from "../TypeAxis";

namespace TypeMouse {
  export type Point = {
    x: TypeAxis.AxisX;
    y: TypeAxis.AxisY;
  };

  export type ButtonByID = {
    readonly "0": "LEFT";
    readonly "1": "SCROLL";
    readonly "2": "RIGHT";
    readonly "3": "SIDE_DOWN";
    readonly "4": "SIDE_UP";
  };

  export type ButtonByName = {
    readonly LEFT: 0;
    readonly SCROLL: 1;
    readonly RIGHT: 2;
    readonly SIDE_DOWN: 3;
    readonly SIDE_UP: 4;
  };
}

export default TypeMouse;
