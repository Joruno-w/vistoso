import _colors from '../colors.json'

export interface Color {
  value: string
  name: string
  romanized: string
  names: string[]
  hue: number
  saturation: number
  lightness: number
}

function shuffle<T>(_arr: T[]): T[] {
  const arr = [..._arr]
  let n = arr.length
  while (--n) {
    const i = (Math.random() * n) | 0;
    [arr[i], arr[n]] = [arr[n], arr[i]]
  }
  return arr
}

export const colors = _colors as Color[]

export function getColors(name: string) {
  return name == 'random'
    ? shuffle(colors)
    : colors.filter(i => i.names.includes(name))
}
