import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const iconSize = 20;

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="footer">
            <h1>Follow us on:-</h1>
            <div className="socialLinks">
              <a href="#" className="link">
                <FaFacebookF size={iconSize} />
              </a>
            </div>
            <div className="socialLinks">
              <a href="#" className="link">
                <FaWhatsapp size={iconSize} />
              </a>
            </div>
            <div className="socialLinks">
              <a href="#" className="link">
                <FaInstagram size={iconSize} />
              </a>
            </div>
            <div className="socialLinks">
              <a href="#" className="link">
                <FaLinkedinIn size={iconSize} />
              </a>
            </div>
            <div className="socialLinks">
              <a href="#" className="link">
                <FaYoutube size={iconSize} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
