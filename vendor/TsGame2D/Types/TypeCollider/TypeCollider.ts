import TypeSize from "../TypeSize";
import TypeAxis from "../TypeAxis";

namespace TypeCollider {
  export type Rect = TypeSize.Size & TypeAxis.Axis;
  export type RectInX = Omit<TypeCollider.Rect, "y" | "height">;
  export type RectInY = Omit<TypeCollider.Rect, "x" | "width">;

  export type Arc = TypeAxis.Axis & TypeSize.Radius;
}

export default TypeCollider;
