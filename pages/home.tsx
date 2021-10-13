import BlobButton from "components/BlobButton"
import DjangoIcon from "components/icons/django"
import ReactIcon from "components/icons/react"
import TypescriptIcon from "components/icons/typescript"
import TextArea from "components/TextArea"
import TextInput from "components/TextInput"
import useHover from "hooks/useHover"
import useWindowDimensions from "hooks/useWindowDimensions"
import React, { LegacyRef, useEffect, useState } from "react"

const Home: React.FC = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  const { isHovered: firstPanelHover, props: firstPanelProps } = useHover()
  const { isHovered: secondPanelHover, props: secondPanelProps } = useHover()
  return (
    <div
      className="overflow-y-auto overflow-x-hidden scrollbar-hide"
      style={{
        width: `${windowWidth ?? 0}px`,
        height: `calc(${windowHeight ?? 0}px - 8rem)`,
      }}
    >
      <div
        id="home"
        className="flex flex-col overflow-x-hidden"
        style={{
          width: `${windowWidth ?? 0}px`,
          height: `calc(${windowHeight ?? 0}px - 8rem)`,
        }}
      >
        <div
          className={`bg-1 h-3/5 flex transition-all items-center justify-around`}
          {...firstPanelProps}
        >
          <div className="text-3 flex-1 text-9xl text-center">Le Gab</div>
          <div className="w-3 rounded-full h-2/3 bg-3"></div>
          <div className="flex flex-1 items-center justify-center gap-3 text-5">
            <ReactIcon
              svgProps={{
                style: {
                  transform: `rotate(${firstPanelHover ? "180deg" : "0deg"})`,
                },
              }}
            ></ReactIcon>
            <DjangoIcon></DjangoIcon>
            <TypescriptIcon></TypescriptIcon>
          </div>
        </div>
        <div
          className={`${
            firstPanelHover ? "border-r-1" : ""
          } flex h-2/5 overflow-hidden transition-all`}
          style={{
            width: `${(windowWidth ?? 0) * 2}px`,
            transform: `translateX(${firstPanelHover ? "0" : "-50%"})`,
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
      </div>
      <div
        className="flex flex-col overflow-x-hidden"
        style={{
          width: `${windowWidth ?? 0}px`,
          height: `calc(${windowHeight ?? 0}px - 8rem)`,
        }}
        id="contact"
      >
        <div
          {...secondPanelProps}
          className="flex items-center flex-1 m-[10rem]  flex-col gap-6 h-full relative justify-center border-8 border-1"
        >
          <div
            className={`absolute transition-all`}
            style={{
              bottom: secondPanelHover ? "15px" : "5px",
              left: secondPanelHover ? "15px" : "5px",
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
              top: secondPanelHover ? "15px" : "5px",
              left: secondPanelHover ? "15px" : "5px",
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
              bottom: secondPanelHover ? "15px" : "5px",
              right: secondPanelHover ? "15px" : "5px",
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
              top: secondPanelHover ? "15px" : "5px",
              right: secondPanelHover ? "15px" : "5px",
            }}
          >
            <div className="relative">
              <div className="absolute top-0 right-0 w-2 h-11 bg-1"></div>
              <div className="absolute top-0 right-0 w-11 h-2 bg-1"></div>
            </div>
          </div>
          <div
            className={`font-medium `}
            style={{ fontSize: secondPanelHover ? "2.5rem" : "2rem" }}
          >
            Contact
          </div>
          <TextInput className="w-72" placeholder="Name"></TextInput>
          <TextInput
            className="w-72"
            placeholder="Email"
            type="email"
          ></TextInput>
          <TextInput
            className="w-72"
            placeholder="Phone"
            type="tel"
          ></TextInput>
          <TextArea className="w-72" placeholder="Message"></TextArea>
          <BlobButton>Send</BlobButton>
        </div>
      </div>
    </div>
  )
}

export default Home
