export function sleep(t = 100) {
  let timer: number
  return new Promise<void>((resolve) => {
    timer = setTimeout(() => {
      clearTimeout(timer)
      resolve()
    }, t)
  })
}
