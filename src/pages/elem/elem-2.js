import React from "react"
import "../style/elem-2.scss"
import Server from "../../images/server.jpg"
import Server2 from "../../images/server2.jpg"
import Server3 from "../../images/server3.jpg"
import Server4 from "../../images/server4.jpg"

export default function Elem2() {
  return (
    <>
      <div className="aboutElem">
        <div className="aboutHead">
          <h1>We are HostBee</h1>
          <hr/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minus molestias sed vero, aliquam culpa ipsum alias labore iure exercitationem nulla laudantium dolorum iste soluta amet natus adipisci doloremque quidem!
          Facere necessitatibus, id minus magnam libero ipsam, odit ex distinctio, ipsa maxime laborum atque. Amet esse distinctio laudantium inventore, facere mollitia? Eos voluptatum perferendis numquam sapiente dignissimos non veniam voluptas.</p>
        </div>
        <div className="aboutChild">
          <div className="aboutCards">
            <img src={Server} alt="cardPost"/>
            <h3>High Performance
            </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quis debitis id suscipit culpa? Fugit vero, aut dicta a quas doloribus impedit mollitia rem? Velit porro ad itaque possimus voluptatem.</p>
          </div>
          <div className="aboutCards">
            <img src={Server2} alt="cardPost"/>
            <h3>Reasonable Cost
            </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quis debitis id suscipit culpa? Fugit vero, aut dicta a quas doloribus impedit mollitia rem? Velit porro ad itaque possimus voluptatem.</p>
          </div>
          <div className="aboutCards">
            <img src={Server3} alt="cardPost"/>
            <h3>Great Reliability
            </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quis debitis id suscipit culpa? Fugit vero, aut dicta a quas doloribus impedit mollitia rem? Velit porro ad itaque possimus voluptatem.
            </p>
          </div>
          <div className="aboutCards">
            <img src={Server4} alt="cardPost"/>
            <h3>Easy to Operate
            </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quis debitis id suscipit culpa? Fugit vero, aut dicta a quas doloribus impedit mollitia rem? Velit porro ad itaque possimus voluptatem.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
