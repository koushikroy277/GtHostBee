import React from "react"
import './header.scss'
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"
import { Link, animateScroll as Scroll } from "react-scroll"

const useStyles = makeStyles({
  icon: {
    width: 40,
    height: 40,
  },
})

export default function SideBar(props) {
  const classes = useStyles()
  const [barOpen, setBarOpen] = React.useState(false);
  const scrollDur = 500
  const delayDur = 50

  const ListAnchor = () => (
    <div
      className="sideBarContainer"
      onClick={() => setBarOpen(false)}
    >
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
        Contact
      </Link>
    </div>
  )

  return (
    <>
        <div>
          <Button onClick={() => setBarOpen(true)} className="drawerBtn">
            <i>
              <MenuIcon className={classes.icon} />
            </i>
          </Button>
          <SwipeableDrawer
            anchor='left'
            open={barOpen}
          onClose={() => setBarOpen(false)}
          onOpen={() => setBarOpen(true)}
          >
            <ListAnchor />
          </SwipeableDrawer>
        </div>
    </>
  )
}
