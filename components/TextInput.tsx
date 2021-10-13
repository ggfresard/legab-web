import React from "react"

const TextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <input
      type="text"
      {...props}
      className={
        "border-1 bg-3 border-[4px] font-semibold focus:border-1 text-1 text-lg focus:ring-0 placeholder-1 " +
        (props.className || "")
      }
    />
  )
}

export default TextInput
