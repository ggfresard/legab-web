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
import WelcomeSection from "components/pages/home/WelcomeSection"
import BioSection from "components/pages/home/BioSection"
import ContactSection from "components/pages/home/ContactSection"

const Home: React.FC = () => {
  const { width: windowWidth } = useWindowDimensions()

  return (
    <div
      className="overflow-y-auto flex-1 overflow-x-hidden scrollbar-hide"
      style={{
        width: `${windowWidth ?? 0}px`,
      }}
    >
      <WelcomeSection />
      <BioSection />
      <ContactSection />
    </div>
  )
}

export default Home
