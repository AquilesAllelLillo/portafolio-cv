/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
//import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
//import { Link } from "gatsby"

import Sidebar from '../Sidebar/Sidebar'
import Footer from "../Footer/Footer"
import "../../assets/styles/components/Layout.css"

const Layout = ({ children }) => {
  
  return (
    <>
      <Sidebar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
