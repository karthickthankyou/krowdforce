import { useEffect } from 'react'

export const useKeypress = (keys: string[], action?: Function) => {
  useEffect(() => {
    const onKeyup = (e: { key: any }) => {
      if (keys.includes(e.key) && action) action()
    }
    window.addEventListener('keyup', onKeyup)
    return () => window.removeEventListener('keyup', onKeyup)
  }, [action, keys])
}

export const useKeypressCmd = (keys: string[], callback: () => void) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (keys.includes(event.key) && (event.metaKey || event.ctrlKey)) {
        callback()
      }
    }

    window.addEventListener('keydown', handler)

    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [keys, callback])
}
