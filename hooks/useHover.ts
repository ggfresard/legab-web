import { useEffect, useRef, useState } from "react"

const useHover = () => {
  const [value, setValue] = useState(false)
  return {
    isHovered: value,
    props: {
      onMouseOver: () => setValue(true),
      onMouseOut: () => setValue(false),
    },
  }
}

export default useHover
