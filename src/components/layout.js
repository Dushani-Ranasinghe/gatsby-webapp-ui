import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./header"

const Layout = ({ children }) => {
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>   <Header/>
        <main>{children}</main>
    </>
  )
}

export default Layout
