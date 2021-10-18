import { mdiGithub, mdiLinkedin, mdiWhatsapp } from "@mdi/js"
import Icon from "@mdi/react"
import axios from "axios"
import BlobButton from "components/BlobButton"
import TextArea from "components/TextArea"
import TextInput from "components/TextInput"
import useHover from "hooks/useHover"
import useWindowDimensions from "hooks/useWindowDimensions"
import React, { useState } from "react"

const ContactSection: React.FC = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  })

  const { isHover, props: hoverProps } = useHover()

  const { width: windowWidth } = useWindowDimensions()

  return (
    <div
      className="flex min-h-full justify-center  flex-col overflow-x-hidden"
      style={{
        width: `${windowWidth ?? 0}px`,
      }}
      id="contact"
    >
      <form
        action="post"
        onSubmit={async (e) => {
          e.preventDefault()
          const response = await axios.post(
            "https://submit-form.com/gBufNfD7",
            values
          )
        }}
        className="flex min-h-full flex-col overflow-x-hidden"
      >
        <div
          {...hoverProps}
          className="flex items-center p-4 gap-2 flex-1 m-7 md:m-[7rem] flex-col md:flex-row   h-full relative justify-around border-8 border-1"
        >
          <div
            className={`absolute transition-all`}
            style={{
              bottom: isHover ? "15px" : "5px",
              left: isHover ? "15px" : "5px",
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
              top: isHover ? "15px" : "5px",
              left: isHover ? "15px" : "5px",
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
              bottom: isHover ? "15px" : "5px",
              right: isHover ? "15px" : "5px",
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
              top: isHover ? "15px" : "5px",
              right: isHover ? "15px" : "5px",
            }}
          >
            <div className="relative">
              <div className="absolute top-0 right-0 w-2 h-11 bg-1"></div>
              <div className="absolute top-0 right-0 w-11 h-2 bg-1"></div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 h-full justify-center flex-[2] md:flex-1">
            <div
              className={`font-medium `}
              style={{ fontSize: isHover ? "2.5rem" : "2rem" }}
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
          <div className=" w-3/4 bg-1  h-2 md:w-2 md:h-3/4"></div>
          <div className="h-full text-5 gap-4 flex-1 flex items-center justify-center">
            <a href="https://github.com/ggfresard" target="_blank">
              <div className="bg-1 p-2 rounded-full">
                <Icon path={mdiGithub} className="w-12 md:w-12"></Icon>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ggfresard/" target="_blank">
              <div className="bg-1 p-2 rounded-full">
                <Icon path={mdiLinkedin} className="w-12 md:w-12"></Icon>
              </div>
            </a>
            <a href="https://wa.me/56963048691" target="_blank">
              <div className="bg-1 p-2 rounded-full">
                <Icon path={mdiWhatsapp} className="w-12 md:w-12"></Icon>
              </div>
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactSection
