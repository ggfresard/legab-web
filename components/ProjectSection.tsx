import useHover from "hooks/useHover"
import useWindowDimensions from "hooks/useWindowDimensions"
import React, { useRef } from "react"
import BlobButton from "./BlobButton"
import DjangoIcon from "./icons/django"
import ReactIcon from "./icons/react"
import TypescriptIcon from "./icons/typescript"

interface Props {
  title: string
  description?: string
  image: string
  link?: string
  right?: true
}

const ProjectSection: React.FC<Props> = ({
  title,
  description,
  image,
  link,
  right,
}) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  const container = useRef<HTMLDivElement>(null)
  const { isHover: textHover, props: textProps } = useHover()

  return (
    <div className="h-full overflow-hidden relative group" ref={container}>
      <img
        className={`absolute h-full object-cover object-left ${
          textHover ? "blur" : ""
        }`}
        src={image}
        style={{}}
      ></img>
      <div
        className={`absolute origin-top  transform top-1/2 ${
          right ? "right-1/2" : "left-1/2"
        }`}
        style={{
          width: `${(windowWidth ?? 0) * 4}px`,
          height: `${(windowHeight ?? 0) * 2}px`,
        }}
      >
        <div
          className={`absolute origin-top ${
            right ? "rotate-75 lg:rotate-45" : "-rotate-75 lg:-rotate-45"
          }  transform top-0  ${
            right ? "-right-1/2" : "-left-1/2"
          } text-center transition-all ${
            (right ? !textHover : textHover)
              ? "md:-translate-x-48"
              : "md:translate-x-48"
          } text-3 top-0 bg-1`}
          style={{
            width: `${(windowWidth ?? 0) * 4}px`,
            height: `${(windowHeight ?? 0) * 2}px`,
          }}
        ></div>
      </div>
      ;
      <div
        className={`flex w-full ${
          right ? "flex-row-reverse" : ""
        } h-full gap-3 z-[50] absolute top-0 ${right ? "right-0" : "left-0"}`}
      >
        <div className="w-0 md:w-1/2 flex p-4 h-full items-center"></div>
        <div
          className={`w-full md:w-1/2 flex p-4 h-full items-center ${
            right ? "justify-start" : "justify-end"
          }`}
          {...textProps}
        >
          <div
            className={`bg-1 md:bg-transparent rounded border-3 border-[2px] md:border-none p-5 md:p-0  ${
              !right ? "text-right" : "text-left"
            } `}
          >
            <div className="text-xl md:text-5xl text-3">{title}</div>
            {textHover ? (
              <div className="text-sm  md:text-2xl my-2 text-5">
                {description ?? ""}
              </div>
            ) : (
              <div
                className={`flex flex-wrap my-3 text-5 ${
                  right ? "justify-start" : "justify-end"
                }`}
              >
                <ReactIcon></ReactIcon>
                <DjangoIcon></DjangoIcon>
                <TypescriptIcon></TypescriptIcon>
              </div>
            )}
            <BlobButton
              className={" " + textHover ? "opacity-100" : "opacity-0"}
            >
              Visit
            </BlobButton>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectSection
