import TypeSize from "../TypeSize";
import TypeAxis from "../TypeAxis";
namespace TypeCollider {
  type BlockedRectSolid = TypeSize.Size & TypeAxis.Axis;
  type BlockerRectSolid = TypeAxis.Axis & TypeAxis.Axis;
}

export default TypeCollider;
