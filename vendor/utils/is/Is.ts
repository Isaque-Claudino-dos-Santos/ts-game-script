import InterfaceIs from './InterfaceIs'

export default class Is implements InterfaceIs {
  string(value: any): value is string {
    return typeof value === 'string'
  }

  number(value: any): value is number {
    return typeof value === 'number'
  }

  null(value: any): value is null {
    return value === null
  }

  array(value: any): value is [] {
    return Array.isArray(value)
  }

  undefined(value: any): value is undefined {
    return typeof value === 'undefined'
  }

  function(value: any): value is Function {
    return typeof value === 'function'
  }
}
