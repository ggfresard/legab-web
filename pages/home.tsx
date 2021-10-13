import BlobButton from "components/BlobButton"
import DjangoIcon from "components/icons/django"
import ReactIcon from "components/icons/react"
import TypescriptIcon from "components/icons/typescript"
import TextArea from "components/TextArea"
import TextInput from "components/TextInput"
import useHover from "hooks/useHover"
import useWindowDimensions from "hooks/useWindowDimensions"
import Link from "next/link"
import React, { LegacyRef, useEffect, useState } from "react"

const Home: React.FC = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  const { isHovered: firstPanelHover, props: firstPanelProps } = useHover()
  const { isHovered: secondPanelFirstHover, props: secondPanelFirstProps } =
    useHover()
  const { isHovered: secondPanelSecondHover, props: secondPanelSecondProps } =
    useHover()
  const { isHovered: thirdPanelHover, props: thirdPanelProps } = useHover()

  const secondPanelHover = secondPanelFirstHover || secondPanelSecondHover

  return (
    <div
      className="overflow-y-auto flex-1 overflow-x-hidden scrollbar-hide"
      style={{
        width: `${windowWidth ?? 0}px`,
      }}
    >
      <div
        id="home"
        className="flex flex-col overflow-x-hidden h-full"
        style={{
          width: `${windowWidth ?? 0}px`,
        }}
      >
        <div
          className={`bg-1 h-3/5 flex transition-all items-center justify-around`}
          {...firstPanelProps}
        >
          <div className="text-3 flex-1 text-3xl md:text-9xl text-center">
            Le Gab
          </div>
          <div className="w-1 md:w-3 rounded-full h-2/3 bg-3"></div>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-3 text-5">
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
          } flex h-1/5 overflow-hidden transition-all`}
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
        <div className="flex-1 flex items-center justify-around">
          <Link href="#bio">
            <BlobButton>Bio</BlobButton>
          </Link>

          <Link href="#contact">
            <BlobButton>Contact</BlobButton>
          </Link>
        </div>
      </div>
      <div
        className="flex h-full flex-col overflow-hidden relative"
        style={{
          width: `${windowWidth ?? 0}px`,
        }}
        id="bio"
      >
        <svg
          className="absolute h-full w-full top-0 right-0 fill-current"
          viewBox="0 0 100 100"
        >
          <circle
            cx={20}
            cy={55}
            r={secondPanelFirstHover || !secondPanelHover ? 70 : 0}
          ></circle>
          <circle
            cx={80}
            cy={40}
            r={secondPanelSecondHover || !secondPanelHover ? 70 : 0}
          ></circle>
        </svg>
        <div className="w-full flex h-full absolute top-0 left-0 ">
          <div
            {...secondPanelFirstProps}
            className="flex-1 h-full text-5 justify-center items-center flex"
          >
            <div
              style={{
                opacity: secondPanelFirstHover || !secondPanelHover ? 1 : 0,
              }}
            >
              <div className="text-2xl md:text-4xl text-3 font-semibold">
                Bio:
              </div>
              <ul className="text-lg md:text-2xl max-w-2xl">
                <li>
                  <b className="text-xl md:text-3xl text-3">Name:</b> Gabriel
                  Pablo González Fresard
                </li>
                <li>
                  <b className="text-xl md:text-3xl text-3">Profession: </b>
                  Software Engineer
                </li>
                <li>
                  <b className="text-xl md:text-3xl text-3">Education: </b>Civil
                  Engineer, mayor in Computer Science and Information
                  Technologies Universidad Católica del Norte
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex-1 h-full text-5 justify-center items-center flex"
            {...secondPanelSecondProps}
          >
            <div
              style={{
                opacity: secondPanelSecondHover || !secondPanelHover ? 1 : 0,
              }}
            >
              <ul className="text-lg md:text-2xl max-w-2xl">
                <li>
                  <b className="text-xl md:text-3xl text-3">Skills:</b> Fast
                  learner, High adaptability, People person
                </li>
                <li>
                  <b className="text-xl md:text-3xl text-3">Frameworks: </b>
                  React/Next, Angular, Svelte, Node/NestJS, Express, Django/DRF,
                  Laravel, .NET Core, TypeORM, SQL and No-SQL Databases,
                  Flutter, React-Native WebSockets, JWT, REST API, Testing,Git
                  ,CI/CD, AWS, Heroku IOT/Arduino, Tailwind, Bootstrap, JQuery,
                  Maps, Chart.js, THREE.js, P5.js, PIXI.js, Unity, Godot,
                  GameMaker, Javascript/Typescript(♡),Python, C/C++, C#,PHP,
                  Java, Prolog
                </li>
                <li>
                  <b className="text-xl md:text-3xl text-3">Languages: </b>
                  Spanish:Native, English:Advanced
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex h-full flex-col overflow-x-hidden"
        style={{
          width: `${windowWidth ?? 0}px`,
        }}
        id="contact"
      >
        <div
          {...thirdPanelProps}
          className="flex items-center flex-1 m-7 md:m-[10rem]  flex-col gap-6 h-full relative justify-center border-8 border-1"
        >
          <div
            className={`absolute transition-all`}
            style={{
              bottom: thirdPanelHover ? "15px" : "5px",
              left: thirdPanelHover ? "15px" : "5px",
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
              top: thirdPanelHover ? "15px" : "5px",
              left: thirdPanelHover ? "15px" : "5px",
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
              bottom: thirdPanelHover ? "15px" : "5px",
              right: thirdPanelHover ? "15px" : "5px",
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
              top: thirdPanelHover ? "15px" : "5px",
              right: thirdPanelHover ? "15px" : "5px",
            }}
          >
            <div className="relative">
              <div className="absolute top-0 right-0 w-2 h-11 bg-1"></div>
              <div className="absolute top-0 right-0 w-11 h-2 bg-1"></div>
            </div>
          </div>
          <div
            className={`font-medium `}
            style={{ fontSize: thirdPanelHover ? "2.5rem" : "2rem" }}
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
          <TextArea
            className="w-72 transition-none"
            placeholder="Message"
          ></TextArea>
          <BlobButton>Send</BlobButton>
        </div>
      </div>
    </div>
  )
}

export default Home
