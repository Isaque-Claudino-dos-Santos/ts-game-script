import TypeCollider from "../../Types/TypeCollider";

export default interface InterfaceColliderRect {
  solid(
    blocked: TypeCollider.BlockedRectSolid,
    blocker: TypeCollider.BlockerRectSolid
  ): void;
}
