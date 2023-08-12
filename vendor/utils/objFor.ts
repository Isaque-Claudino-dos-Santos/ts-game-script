type ObjForCallback<T extends object, K extends keyof T> = (
  value: T[K],
  key: K,
  object: T
) => void

export default function objFor<O extends object>(
  callback: ObjForCallback<O, keyof O>,
  object: O
) {
  for (const key in object) {
    const value = object[key]
    callback(value, key, object)
  }
}
