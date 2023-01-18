import MesureCollider from "./MesureCollider";
export default interface InterfaceMesure {
  readonly collider: MesureCollider;

  half(n: number): number;
  sum(n1: number, n2: number): number;
  sub(n1: number, n2: number): number;
  difference(p1: number, p2: number): number;
  distance(p1: number, p2: number): number;
  cathetus(p1: number, p2: number): number;
  hypotenuse(cat1: number, cat2: number): number;
  sumHalf(half1: number, half2: number): number;
  sumCathetus(cat1: number, cat2: number): number;
  square(n: number): number;
  cube(n: number): number;
  center(point: number, size: number): number;
  toRadian(deg: number): number;
  toDeg(radian: number): number;
}
