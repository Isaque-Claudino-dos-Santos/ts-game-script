import TypeCollider from "../../Types/TypeCollider";

export default interface InterfaceColliderRect {
  solid(blocked: TypeCollider.Rect, blocker: TypeCollider.Rect): void;

  touch(
    rang: TypeCollider.Rect,
    touched: TypeCollider.Rect,
    callback?: () => void
  ): boolean;
}
