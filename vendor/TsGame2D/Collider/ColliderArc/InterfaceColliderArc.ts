import TypeCollider from "../../Types/TypeCollider";

export default interface InterfaceColliderArc {
  touch(
    rang: TypeCollider.Arc,
    touched: TypeCollider.Arc,
    callback?: () => void
  ): boolean;
}
