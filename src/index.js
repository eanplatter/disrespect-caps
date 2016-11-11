// @flow 
export default function(src: string, target: string) {
  if (src.length !== target.length) return false
  const tArray = target.split('')
  const filtered = tArray.filter((l, i) => {
    if (src[i].toUpperCase() === l.toUpperCase()) {
      return l
    }
  })
  return filtered.length === src.length 
}
