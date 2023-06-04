import Object from '@Vendor/Models/Object'
import TypeShape from './TypeShape'

type TypeResolveCollider<Target extends Object<TypeShape>> = (
  target: Target
) => void
export default TypeResolveCollider
