import * as React from "react"
import "./page-1.scss"
import { Element } from "react-scroll"

import SEO from "../components/seo"
import Elem1 from "./elem/elem-1"
import Elem2 from "./elem/elem-2"
import Elem3 from "./elem/elem-3"
import Elem4 from "./elem/elem-4"
import Elem5 from "./elem/elem-5"

const FirstPage = () => (
  <>
    <div className="parent">
      <SEO title="Home" />
      <Element name="page1" className="element">
        <Elem1 />
      </Element>
      <div className="bgLex">

        <Element name="page2" className="element">
          <Elem2 />
        </Element>

        <Element name="page3" className="element">
          <Elem3 />
        </Element>

        <Element name="page4" className="element">
          <Elem4 />
        </Element>

        <Element name="page5" className="element">
          <Elem5 />
        </Element>
      </div>
    </div>
  </>
)

export default FirstPage
