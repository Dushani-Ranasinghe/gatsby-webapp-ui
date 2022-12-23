import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import "./layout.css"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allContentfulLink{
        edges{
          node{
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
    
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: data.site.siteMetadata.description },
          { name: "keywords", content: data.site.siteMetadata.keywords },
        ]}
      />
      <Header />
      {children}
      <Footer data={data}>
        Backgrounds made in Cinema 4D, ios app in Swift, site in React.
        <a href="mailto:uththaradushani@gmail.com">Email us</a> to ask anything. @2022
        
      </Footer>
    </>
  )
}

export default Layout
