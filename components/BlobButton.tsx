import { ButtonHTMLAttributes, MouseEventHandler } from "react"

const BlobButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onMouseLeave,
  onMouseEnter,
  onClick,
  className,
}) => {
  return (
    <button
      className={(className ?? "") + " blob-btn px-8 py-4"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
        </span>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </button>
  )
}

export default BlobButton
