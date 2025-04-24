export function formatTime(duration: number) {
  const minutes = Math.floor(duration / 60)
  const seconds = Number.parseInt((duration % 60).toString(), 10)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
