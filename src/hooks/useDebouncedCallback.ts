import { useCallback, useRef } from 'react'

const useDebouncedCallback = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number,
): ((...args: T) => void) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const debouncedCallback = useCallback(
    (...args: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [callback, delay],
  )

  return debouncedCallback
}

export default useDebouncedCallback
