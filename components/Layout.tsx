import { useRouter } from "next/dist/client/router"
import React from "react"
import Header from "./Header"

const Layout: React.FC = ({ children }) => {
  const router = useRouter()

  return (
    <div className="bg-3 h-screen flex flex-col text-1 overflow-auto overflow-x-hidden">
      {router.asPath !== "/" && <Header />}

      {children}
    </div>
  )
}

export default Layout
