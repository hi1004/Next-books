import { useEffect, useState } from 'react'

function useDomLoaded() {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return domLoaded
}

export default useDomLoaded
