import BlobButton from "components/BlobButton"
import DjangoIcon from "components/icons/django"
import NestIcon from "components/icons/nest"
import MongoIcon from "components/icons/mongo"
import NextIcon from "components/icons/next"
import ReactIcon from "components/icons/react"
import TypescriptIcon from "components/icons/typescript"
import TextArea from "components/TextArea"
import TextInput from "components/TextInput"
import useHover from "hooks/useHover"
import useWindowDimensions from "hooks/useWindowDimensions"
import Link from "next/link"
import React, { LegacyRef, useEffect, useRef, useState } from "react"
import axios from "axios"

const Home: React.FC = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  const { isHovered: firstPanelFirstHover, props: firstPanelFirstProps } =
    useHover()
  const { isHovered: firstPanelSecondHover, props: firstPanelSecondProps } =
    useHover()
  const { isHovered: secondPanelFirstHover, props: secondPanelFirstProps } =
    useHover()
  const { isHovered: secondPanelSecondHover, props: secondPanelSecondProps } =
    useHover()
  const container = useRef<HTMLDivElement>(null)
  const { isHovered: thirdPanelHover, props: thirdPanelProps } = useHover()

  const secondPanelHover = secondPanelFirstHover || secondPanelSecondHover

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  })

  const [width, height] = [
    windowWidth,
    container.current?.offsetWidth ?? windowHeight,
  ]
  return (
    <div
      className="overflow-y-auto flex-1 overflow-x-hidden scrollbar-hide"
      style={{
        width: `${windowWidth ?? 0}px`,
      }}
      ref={container}
    >
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
      <div
        className="md:flex md:h-full md:flex-chol md:overflow-hidden relative"
        style={{
          width: `${windowWidth ?? 0}px`,
        }}
        id="bio"
      >
        <div className="w-full justify-evenly p-4 flex flex-col md:flex-row md:h-full ">
          <div
            {...secondPanelFirstProps}
            className="md:w-1/2  md:h-full  text-5 justify-center items-center flex  z-20"
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
                <li>
                  <b className="text-xl md:text-3xl text-3">Skills:</b> Fast
                  learner, High adaptability, People person
                </li>
              </ul>
            </div>
          </div>
          <div
            className="md:flex-1 md:h-full w-full p-2 text-5 justify-center items-center flex  z-20"
            {...secondPanelSecondProps}
          >
            <div
              style={{
                opacity: secondPanelSecondHover || !secondPanelHover ? 1 : 0,
              }}
            >
              <ul className="text-lg md:text-2xl max-w-2xl whitespace-pre-line">
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
          <svg
            className="absolute h-full w-full top-0 right-0 fill-current z-10"
            viewBox={`0 0 ${width} ${height}`}
          >
            <g className="opacity-1 md:opacity-0">
              <circle
                cx={(width ?? 0) / 2}
                cy={(height ?? 0) / 4}
                r={
                  secondPanelFirstHover || !secondPanelHover
                    ? (height ?? 0) * 1.2
                    : 0
                }
              ></circle>
              <circle
                cx={(width ?? 0) / 2}
                cy={((height ?? 0) * 3) / 4}
                r={
                  secondPanelSecondHover || !secondPanelHover
                    ? (height ?? 0) * 1.2 ?? 0
                    : 0
                }
              ></circle>
            </g>
            <g className="opacity-0 md:opacity-100">
              <circle
                cx={((width ?? 0) * 0.8) / 4}
                cy={((height ?? 0) * 0.8) / 2}
                r={
                  secondPanelFirstHover || !secondPanelHover
                    ? (height ?? 0) * 0.7
                    : 0
                }
              ></circle>
              <circle
                cx={((width ?? 0) * 3 * 1.2) / 4}
                cy={((height ?? 0) * 1.2) / 2}
                r={
                  secondPanelSecondHover || !secondPanelHover
                    ? (height ?? 0) * 0.7
                    : 0
                }
                className="z-40"
              ></circle>
            </g>
          </svg>
        </div>
      </div>
      <form
        action="post"
        onSubmit={async (e) => {
          e.preventDefault()
          const response = await axios.post(
            "https://submit-form.com/gBufNfD7",
            values
          )
        }}
      >
        <div
          className="flex min-h-full flex-col overflow-x-hidden"
          style={{
            width: `${windowWidth ?? 0}px`,
          }}
          id="contact"
        >
          <div
            {...thirdPanelProps}
            className="flex items-center p-4 flex-1 m-7 md:m-[10rem]  flex-col gap-6 h-full relative justify-center border-8 border-1"
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
            <TextInput
              className="w-full md:w-72"
              placeholder="Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            ></TextInput>
            <TextInput
              className="w-full md:w-72"
              placeholder="Email"
              type="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            ></TextInput>
            <TextInput
              className="w-full md:w-72"
              placeholder="Phone"
              type="tel"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            ></TextInput>
            <TextArea
              className="w-full md:w-72 transition-none"
              placeholder="Message"
              onChange={(e) =>
                setValues({ ...values, message: e.target.value })
              }
            ></TextArea>
            <BlobButton type="submit">Send</BlobButton>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Home
