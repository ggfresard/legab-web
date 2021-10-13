import { mdiChevronRight } from "@mdi/js"
import Icon from "@mdi/react"
import BlobButton from "components/BlobButton"
import type { NextPage } from "next"
import Link from "next/link"
import React, { useState } from "react"

const Home: NextPage = () => {
  const [buttonHover, setButtonHover] = useState(false)

  return (
    <div className="flex items-center  flex-col gap-6 h-full relative justify-center border-8 border-1">
      <div
        className={`absolute transition-all`}
        style={{
          bottom: buttonHover ? "15px" : "5px",
          left: buttonHover ? "15px" : "5px",
        }}
      >
        <div className="relative">
          <div className="absolute bottom-0 left-0 w-2 h-11 bg-1"></div>
          <div className="absolute bottom-0 left-0 w-11 h-2 bg-1"></div>
        </div>
      </div>
      <div
        className={`absolute transition-all`}
        style={{
          top: buttonHover ? "15px" : "5px",
          left: buttonHover ? "15px" : "5px",
        }}
      >
        <div className="relative">
          <div className="absolute top-0 left-0 w-2 h-11 bg-1"></div>
          <div className="absolute top-0 left-0 w-11 h-2 bg-1"></div>
        </div>
      </div>
      <div
        className={`absolute transition-all`}
        style={{
          bottom: buttonHover ? "15px" : "5px",
          right: buttonHover ? "15px" : "5px",
        }}
      >
        <div className="relative">
          <div className="absolute bottom-0 right-0 w-2 h-11 bg-1"></div>
          <div className="absolute bottom-0 right-0 w-11 h-2 bg-1"></div>
        </div>
      </div>
      <div
        className={`absolute transition-all`}
        style={{
          top: buttonHover ? "15px" : "5px",
          right: buttonHover ? "15px" : "5px",
        }}
      >
        <div className="relative">
          <div className="absolute top-0 right-0 w-2 h-11 bg-1"></div>
          <div className="absolute top-0 right-0 w-11 h-2 bg-1"></div>
        </div>
      </div>
      <div className="text-9xl">LeGab.dev</div>
      <Link href="/home">
        <BlobButton
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          <div className="flex items-center text-3xl m-auto">
            Enter
            <Icon path={mdiChevronRight} className="w-7 h-7"></Icon>
          </div>
        </BlobButton>
      </Link>
    </div>
  )
}

export default Home
