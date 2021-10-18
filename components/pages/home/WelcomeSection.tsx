import BlobButton from "components/BlobButton"
import DjangoIcon from "components/icons/django"
import MongoIcon from "components/icons/mongo"
import NestIcon from "components/icons/nest"
import NextIcon from "components/icons/next"
import ReactIcon from "components/icons/react"
import TypescriptIcon from "components/icons/typescript"
import useHover from "hooks/useHover"
import useWindowDimensions from "hooks/useWindowDimensions"
import Link from "next/link"
import React from "react"

const WelcomeSection: React.FC = () => {
  const { width: windowWidth } = useWindowDimensions()
  const { isHover: firstPanelFirstHover, props: firstPanelFirstProps } =
    useHover()
  const { isHover: firstPanelSecondHover, props: firstPanelSecondProps } =
    useHover()

  return (
    <div
      id="home"
      className="flex flex-col relative overflow-x-hidden h-full"
      style={{
        width: `${windowWidth ?? 0}px`,
      }}
    >
      <div
        className="absolute  w-1/2 left-0 top-0 h-full z-[50]"
        {...firstPanelFirstProps}
      ></div>
      <div
        className="absolute w-1/2 right-0 top-0 h-full z-[50]"
        {...firstPanelSecondProps}
      ></div>
      <div
        className={`bg-1 h-3/5 flex relative transition-all items-center justify-around`}
      >
        <div className="text-3 flex-1 text-3xl md:text-9xl text-center">
          Le Gab
        </div>
        <div className="w-1 md:w-3 rounded-full h-2/3 bg-3"></div>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-3 text-5">
          <ReactIcon
            svgProps={{
              style: {
                transform: `rotate(${
                  firstPanelFirstHover ? "180deg" : "0deg"
                })`,
              },
            }}
          ></ReactIcon>
          <DjangoIcon></DjangoIcon>
          <TypescriptIcon></TypescriptIcon>
          <NextIcon></NextIcon>
          <NestIcon></NestIcon>
          <MongoIcon></MongoIcon>
        </div>
      </div>
      <div
        className={`${
          firstPanelFirstHover ? "border-r-1" : ""
        } flex h-1/5 overflow-hidden transition-all`}
        style={{
          width: `${(windowWidth ?? 0) * 2}px`,
          transform: `translateX(${firstPanelFirstHover ? "0" : "-50%"})`,
        }}
      >
        <svg
          className="h-1/2"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ width: `${windowWidth ?? 0}px` }}
        >
          <polygon
            className="transition-all fill-current"
            points={`0,0 ${100},${0} ${0},100`}
          ></polygon>
        </svg>
        <svg
          className="h-1/2"
          preserveAspectRatio="none"
          style={{ width: `${windowWidth ?? 0}px` }}
          viewBox="0 0 100 100"
        >
          <polygon
            points={`0,0 ${100},${100} ${100},0`}
            className="transition-all fill-current"
          ></polygon>
        </svg>
      </div>
      <div className="flex-1 flex items-center justify-around">
        <Link href="#bio">
          <BlobButton className="z-[60]">Bio</BlobButton>
        </Link>

        <Link href="#contact">
          <BlobButton className="z-[60]">Contact</BlobButton>
        </Link>
      </div>
    </div>
  )
}

export default WelcomeSection
