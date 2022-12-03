import TypeSize from "../TypeSize";
import TypeAxis from "../TypeAxis";
namespace TypeCollider {
  export type BlockedRectSolid = TypeSize.Size & TypeAxis.Axis;
  export type BlockerRectSolid = TypeSize.Size & TypeAxis.Axis;

  export type BlockedRectSolidInX = Omit<
    TypeCollider.BlockedRectSolid,
    "y" | "height"
  >;
  export type BlockerRectSolidInX = Omit<
    TypeCollider.BlockerRectSolid,
    "y" | "height"
  >;

  export type BlockedRectSolidInY = Omit<
    TypeCollider.BlockedRectSolid,
    "x" | "width"
  >;
  export type BlockerRectSolidInY = Omit<
    TypeCollider.BlockerRectSolid,
    "x" | "width"
  >;
}

export default TypeCollider;
