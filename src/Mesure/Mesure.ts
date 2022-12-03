import InterfaceMesure from "./InterfaceMesure";

class Mesure implements InterfaceMesure {
  half(n: number): number {
    return n / 2;
  }

  sum(n1: number, n2: number) {
    return n1 + n2;
  }

  sub(n1: number, n2: number): number {
    return n1 - n2;
  }

  difference(p1: number, p2: number): number {
    return p1 - p2;
  }

  distance(p1: number, p2: number): number {
    return p1 - p2;
  }

  cathetus(p1: number, p2: number): number {
    return p1 - p2;
  }

  hypotenuse(cat1: number, cat2: number): number {
    return Math.sqrt(cat1 ** 2 + cat2 ** 2);
  }

  sumHalf(half1: number, half2: number): number {
    return half1 + half2;
  }

  sumCathetus(cat1: number, cat2: number): number {
    return cat1 + cat2;
  }

  square(n: number): number {
    return n ** 2;
  }

  cube(n: number): number {
    return n ** 3;
  }

  center(point: number, size: number): number {
    return point + size / 2;
  }

  toDeg(radian: number): number {
    return radian * (180 / Math.PI);
  }

  toRadian(deg: number): number {
    return deg * (Math.PI / 180);
  }
}

export default new Mesure();
