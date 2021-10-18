import useHover from "hooks/useHover"
import useWindowDimensions from "hooks/useWindowDimensions"
import { useEffect, useRef, useState } from "react"

const BioSection: React.FC = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  const container = useRef<HTMLDivElement>(null)

  const { isHover: secondPanelFirstHover, props: secondPanelFirstProps } =
    useHover()
  const { isHover: secondPanelSecondHover, props: secondPanelSecondProps } =
    useHover()
  const [width, height] = [
    windowWidth,
    container.current?.offsetWidth ?? windowHeight,
  ]

  const [secondPanelHover, setSecondPanelHover] = useState(false)

  useEffect(() => {
    setSecondPanelHover(secondPanelFirstHover || secondPanelSecondHover)
  }, [secondPanelFirstHover, secondPanelSecondHover])

  return (
    <div
      className="md:flex md:h-full md:flex-col hover:bg-3 bg-1 md:overflow-hidden relative"
      style={{
        width: `${windowWidth ?? 0}px`,
      }}
      id="bio"
      ref={container}
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
                Engineer, mayor in Computer Science and Information Technologies
                Universidad Católica del Norte
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
                Laravel, .NET Core, TypeORM, SQL and No-SQL Databases, Flutter,
                React-Native WebSockets, JWT, REST API, Testing,Git ,CI/CD, AWS,
                Heroku IOT/Arduino, Tailwind, Bootstrap, JQuery, Maps, Chart.js,
                THREE.js, P5.js, PIXI.js, Unity, Godot, GameMaker,
                Javascript/Typescript(♡),Python, C/C++, C#,PHP, Java, Prolog
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
                  : 200
              }
            ></circle>
            <circle
              cx={((width ?? 0) * 3 * 1.2) / 4}
              cy={((height ?? 0) * 1.2) / 2}
              r={
                secondPanelSecondHover || !secondPanelHover
                  ? (height ?? 0) * 0.7
                  : 200
              }
              className="z-40"
            ></circle>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default BioSection
