import { useEffect, useRef, useState } from "react"

const useHover = (initial?: boolean) => {
  const [value, setValue] = useState(initial || false)
  return {
    isHover: value,
    props: {
      onMouseOver: () => setValue(true),
      onMouseOut: () => setValue(false),
    },
  }
}

export default useHover
