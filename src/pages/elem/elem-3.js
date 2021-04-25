import React from "react"
import "../style/elem-3.scss"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"
import DoneAllIcon from "@material-ui/icons/DoneAll"

export default function Elem3() {
  return (
    <>
      <div className="pricing">
        <div className="priceContainer">
          <div className="priceHead">
            <h1>Our Pricing</h1>
            <hr/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem voluptas natus consequuntur quos quaerat nihil eos
              officia libero. Vero aliquid quos libero optio. Numquam maiores
              doloremque ex neque error repellat. Quibusdam explicabo id
              excepturi beatae impedit inventore maiores quo, exercitationem
              pariatur. Facilis repudiandae eos quos corrupti obcaecati, laborum
              magnam eius unde tempora quasi dignissimos doloribus doloremque
              iusto quam vero accusamus?
            </p>
          </div>
          <div className="priceList">
            {Data.map((d, i) => (
              <div className="priceCard" key={i}>
                <h1>{d.tier}</h1>
                <h2>
                  <span>{d.price} </span> / month
                </h2>
                <h3>{d.processor}</h3>
                <h3>{d.storage}</h3>
                <h3>{d.ram}</h3>
                <h3>{d.support}</h3>
                <div className="priceIcon">
                  <h3>{d.ssl}</h3>
                  <i>{d.sslIcon}</i>
                </div>
                <div className="priceIcon">
                  <h3>{d.domain}</h3>
                  <i>{d.domainIcon}</i>
                </div>
                <div className="priceBtn">
                  <button>Place Order</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const Data = [
  {
    tier: "Free",
    price: "$0",
    processor: "Dual Core Processor",
    storage: "8GB Internal Storage",
    ram: "2GB RAM",
    support: "24/7 customer support",
    ssl: "SSL Certificate",
    sslIcon: <HighlightOffIcon style={{ color: "red" }} />,
    domain: "Domain",
    domainIcon: <HighlightOffIcon style={{ color: "red" }} />,
  },
  {
    tier: "Basic",
    price: "$9.99",
    processor: "Quad Core Processor",
    storage: "32GB Internal Storage",
    ram: "4GB RAM",
    support: "24/7 customer support",
    ssl: "SSL Certificate",
    sslIcon: <HighlightOffIcon style={{ color: "red" }} />,
    domain: "Domain",
    domainIcon: <HighlightOffIcon style={{ color: "red" }} />,
  },
  {
    tier: "Premium",
    price: "$29.99",
    processor: "Octa Core Processor",
    storage: "64GB Internal Storage",
    ram: "12GB RAM",
    support: "24/7 customer support",
    ssl: "SSL Certificate",
    sslIcon: <DoneAllIcon style={{ color: "green" }} />,
    domain: "Domain",
    domainIcon: <HighlightOffIcon style={{ color: "red" }} />,
  },
  {
    tier: "Ultra",
    price: "$59.99",
    processor: "Octa Core Processor",
    storage: "128GB Internal Storage",
    ram: "16GB RAM",
    support: "24/7 customer support",
    ssl: "SSL Certificate",
    sslIcon: <DoneAllIcon style={{ color: "green" }} />,
    domain: "Domain",
    domainIcon: <DoneAllIcon style={{ color: "green" }} />,
  },
  {
    tier: "Platinum",
    price: "$79.99",
    processor: "Octa Core Processor",
    storage: "256GB Internal Storage",
    ram: "32GB RAM",
    support: "24/7 customer support",
    ssl: "SSL Certificate",
    sslIcon: <DoneAllIcon style={{ color: "green" }} />,
    domain: "Domain",
    domainIcon: <DoneAllIcon style={{ color: "green" }} />,
  },
  {
    tier: "Ace",
    price: "$149.99",
    processor: "Octa Core Processor",
    storage: "1TB Internal Storage",
    ram: "64GB RAM",
    support: "24/7 customer support",
    ssl: "SSL Certificate",
    sslIcon: <DoneAllIcon style={{ color: "green" }} />,
    domain: "Domain",
    domainIcon: <DoneAllIcon style={{ color: "green" }} />,
  },
  {
    tier: "Ace Professional",
    price: "$179.99",
    processor: "Octa Core Processor",
    storage: "3TB Internal Storage",
    ram: "128GB RAM",
    support: "24/7 customer support",
    ssl: "SSL Certificate",
    sslIcon: <DoneAllIcon style={{ color: "green" }} />,
    domain: "Domain",
    domainIcon: <DoneAllIcon style={{ color: "green" }} />,
  },
  {
    tier: "Ace Enterprise",
    price: "$229.99",
    processor: "Octa Core Processor",
    storage: "6TB Internal Storage",
    ram: "256GB RAM",
    support: "24/7 customer support",
    ssl: "SSL Certificate",
    sslIcon: <DoneAllIcon style={{ color: "green" }} />,
    domain: "Domain",
    domainIcon: <DoneAllIcon style={{ color: "green" }} />,
  },
]
