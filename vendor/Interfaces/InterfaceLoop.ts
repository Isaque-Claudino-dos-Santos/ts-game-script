export type TypeLoopFN = () => void

export default interface InterfaceLoop {
  init: TypeLoopFN
  update: TypeLoopFN
  render: TypeLoopFN
}
