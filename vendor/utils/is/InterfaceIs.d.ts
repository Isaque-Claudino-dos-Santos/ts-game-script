export default interface InterfaceIs {
  string(value: any): value is string

  number(value: any): value is number

  null(value: any): value is null

  array(value: any): value is []

  undefined(value: any): value is undefined

  function(value: any): value is Function
}
