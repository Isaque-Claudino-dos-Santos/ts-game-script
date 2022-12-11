export default function captalize(str: string): string {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}
