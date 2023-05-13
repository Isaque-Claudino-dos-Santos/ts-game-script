export type TypeGameLoopFN = () => void

export default interface InterfaceGameLoop {
  init: TypeGameLoopFN
  update: TypeGameLoopFN
  render: TypeGameLoopFN
}
