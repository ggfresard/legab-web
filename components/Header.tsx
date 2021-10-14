import { mdiHamburger } from "@mdi/js"
import Icon from "@mdi/react"
import Link from "next/link"
import React, { useState } from "react"
import BlobButton from "./BlobButton"

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex h-16 md:h-32 gap-5  justify-between w-screen items-center relative">
      <div className=" text-xl  md:text-4xl ml-5 justify-center flex items-center">
        Le Gab
      </div>
      <div className=" gap-1 md:gap-5 items-center hidden md:flex pr-6">
        <Link href="/home#home">
          <BlobButton>
            <div className="text-xs md:text-base w-12 md:w-32">Home</div>
          </BlobButton>
        </Link>
        <Link href="/home#bio">
          <BlobButton>
            <div className="text-xs md:text-base w-12 md:w-32">Bio</div>
          </BlobButton>
        </Link>
        <Link href="/home#contact">
          <BlobButton>
            <div className="text-xs md:text-base w-12 md:w-32">Contact</div>
          </BlobButton>
        </Link>
        <Link href="/projects">
          <BlobButton>
            <div className="text-xs md:text-base w-12 md:w-32">Projects</div>
          </BlobButton>
        </Link>
      </div>
      <BlobButton
        className="md:hidden block py-4 px-4"
        onClick={() => {
          setMenuOpen((prev) => !prev)
        }}
      >
        <Icon path={mdiHamburger} className="w-6 h-6"></Icon>
      </BlobButton>
      {
        <div
          className={` ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } z-50 gap-1   md:gap-5 items-center flex flex-col absolute top-0 right-0 bg-3 border-1 border-[4px] p-2 `}
        >
          <div
            className="w-12 h-12 items-center text-center flex justify-center"
            onClick={() => {
              setMenuOpen((prev) => !prev)
            }}
          >
            <Icon path={mdiHamburger} className="w-6 h-6"></Icon>
          </div>
          <Link href="/home#home">
            <BlobButton>
              <div className="text-xs md:text-base w-12 md:w-32">Home</div>
            </BlobButton>
          </Link>
          <Link href="/home#bio">
            <BlobButton>
              <div className="text-xs md:text-base w-12 md:w-32">Bio</div>
            </BlobButton>
          </Link>
          <Link href="/home#contact">
            <BlobButton>
              <div className="text-xs md:text-base w-12 md:w-32">Contact</div>
            </BlobButton>
          </Link>
          <Link href="/projects">
            <BlobButton>
              <div className="text-xs md:text-base w-12 md:w-32">Projects</div>
            </BlobButton>
          </Link>
        </div>
      }
    </div>
  )
}

export default Header
