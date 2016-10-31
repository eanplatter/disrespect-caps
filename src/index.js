// @flow

export default function(src: string, target: string): boolean {
  if (src.length !== target.length) return false
  const tArray: string[] = target.split('')
  const filtered: string[] = tArray.filter((l: string, i: number) => {
    if (src[i] === l) {
      return l
    } else if (src[i] === l.toUpperCase()) {
      return l
    }
  })
  return filtered.length === src.length 
}
