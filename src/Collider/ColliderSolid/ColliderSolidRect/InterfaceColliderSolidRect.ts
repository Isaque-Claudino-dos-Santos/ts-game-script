import TypeCollider from "../../../Types/TypeCollider";

export default interface InterfaceColliderSolidRect {
  efectIn(
    blocked: TypeCollider.BlockedRectSolid,
    blocker: TypeCollider.BlockerRectSolid
  ): void;
}
