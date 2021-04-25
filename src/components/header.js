import * as React from "react"
import "./header.scss"
import PropTypes from "prop-types"
import { Link, animateScroll as Scroll } from "react-scroll"
import { BiSearchAlt } from "react-icons/bi"

import SideBar from "./drawer"

const Header = () => {
  const [bg, setBg] = React.useState(false);
  const scrollDur = 500;
  const delayDur = 50;
  
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setBg(true)
    } else {
      setBg(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  return (
    <header>
      <div className={bg ? "navParent show" : "navParent"}>
        <div className="Nav">
          <div className="logo">
            <h1>HostPlus</h1>
          </div>
          <div className="linkContainer">
            <Link
              activeClass="active"
              className="link"
              to="page1"
              spy={true}
              smooth={true}
              duration={scrollDur}
              delay={delayDur}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              className="link"
              to="page2"
              spy={true}
              smooth={true}
              duration={scrollDur}
              delay={delayDur}
            >
              About Us
            </Link>
            <Link
              activeClass="active"
              className="link"
              to="page3"
              spy={true}
              smooth={true}
              duration={scrollDur}
              delay={delayDur}
            >
              Pricing
            </Link>
            <Link
              activeClass="active"
              className="link"
              to="page4"
              spy={true}
              smooth={true}
              duration={scrollDur}
              delay={delayDur}
            >
              Services
            </Link>
            <Link
              activeClass="active"
              className="link"
              to="page5"
              spy={true}
              smooth={true}
              duration={scrollDur}
              delay={delayDur}
            >
              Reviews
            </Link>
            <Link
              activeClass="active"
              className="link"
              to="page6"
              spy={true}
              smooth={true}
              duration={scrollDur}
              delay={delayDur}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="drawer">
        <SideBar />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
