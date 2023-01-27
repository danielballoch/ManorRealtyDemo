/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import Navbar from "./navbar" 
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children, dark }) => {
    console.log("dark", dark)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <Navbar dark={dark}/>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
