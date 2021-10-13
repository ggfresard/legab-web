import Link from "next/link"
import React from "react"
import BlobButton from "./BlobButton"

const Header: React.FC = () => {
  return (
    <div className="flex h-32 gap-5 justify-between overflow-hidden">
      <div className=" text-4xl ml-5 justify-center flex items-center">
        Le Gab
      </div>
      <div className="flex gap-5 items-center pr-6">
        <Link href="/home#home">
          <BlobButton>
            <div className="w-32">Home</div>
          </BlobButton>
        </Link>
        <Link href="/home#bio">
          <BlobButton>
            <div className="w-32">Bio</div>
          </BlobButton>
        </Link>
        <Link href="/home#contact">
          <BlobButton>
            <div className="w-32">Contact</div>
          </BlobButton>
        </Link>
        <Link href="/projects">
          <BlobButton>
            <div className="w-32">Projects</div>
          </BlobButton>
        </Link>
      </div>
    </div>
  )
}

export default Header
