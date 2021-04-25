import React from "react"
import "../style/elem-5.scss"
import model from "../../images/model2.jpg"
import model2 from "../../images/model3.jpg"
import model3 from "../../images/model4.jpg"
import model4 from "../../images/model5.jpg"
import model5 from "../../images/model6.jpg"
import model6 from "../../images/model7.jpg"
import model7 from "../../images/model10.jpg"
import model8 from "../../images/model9.jpg"
import brand from "../../images/logo7.png"
import brand2 from "../../images/logo.png"
import brand3 from "../../images/logo2.png"
import brand4 from "../../images/logo3.png"
import brand5 from "../../images/logo4.png"
import brand6 from "../../images/logo5.png"
import brand7 from "../../images/logo6.png"
import StarIcon from "@material-ui/icons/Star"
import StarBorderIcon from "@material-ui/icons/StarBorder"

export default function Elem5() {
  return (
    <>
      <div className="review">
        <div className="reviewHead">
          <h1>What other customers say</h1>
          <hr />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
            labore, optio quam quae perferendis debitis pariatur voluptates
            minima iusto laudantium eligendi ab reprehenderit ipsum maiores
            mollitia cumque inventore tempore omnis.
          </p>
        </div>
        <div className="reviewBody">
          {reviewData.map((d, i) => (
            <div className="reviewCard" key={i}>
              <div className="reviewImg">
                <img src={d.img} alt="person" />
              </div>
              <div className="reviewMain">
                <h1>{d.name}</h1>
                <h4>{d.review}</h4>
                <div className="reviewStar">
                  {d.starIcon}
                  {d.starIcon2}
                  {d.starIcon3}
                  {d.starIcon4}
                  {d.starIcon5}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reviewClient">
          <div className="brand">
            {clientImg.map((d, i) => (
              <div className="clientImg" key={i}>
                <img src={d.url} alt="brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const clientImg = [
  { url: brand },
  { url: brand2 },
  { url: brand3 },
  { url: brand4 },
  { url: brand5 },
  { url: brand6 },
  { url: brand7 },
]

const iconSize = {
  width: 20,
  height: 20,
}

const reviewData = [
  {
    img: model,
    name: "Laura Green",
    review:
      "Most Reliable & prominant Cloud Service I've used so far. I'm gonna stay with this hosting service for my website",
    starIcon: <StarIcon style={iconSize} />,
    starIcon2: <StarIcon style={iconSize} />,
    starIcon3: <StarIcon style={iconSize} />,
    starIcon4: <StarIcon style={iconSize} />,
    starIcon5: <StarIcon style={iconSize} />,
  },
  {
    img: model2,
    name: "Mischelle Cherry",
    review:
      "Best premium hosting service for any kind of apps, websites & desktop application. Really Pleased with the service",
    starIcon: <StarIcon style={iconSize} />,
    starIcon2: <StarIcon style={iconSize} />,
    starIcon3: <StarIcon style={iconSize} />,
    starIcon4: <StarIcon style={iconSize} />,
    starIcon5: <StarBorderIcon style={iconSize} />,
  },
  {
    img: model3,
    name: "Kerry Starkinson",
    review:
      "I've hosted 2 of my websites on their cloud and also used their realtime database. It's giving reliable performance and dominant reliability along with it",
    starIcon: <StarIcon style={iconSize} />,
    starIcon2: <StarIcon style={iconSize} />,
    starIcon3: <StarIcon style={iconSize} />,
    starIcon4: <StarIcon style={iconSize} />,
    starIcon5: <StarIcon style={iconSize} />,
  },
  {
    img: model4,
    name: "Sam Brad",
    review:
      "Their premium package service are awesome but they don't provide much facility for the basic service. So I'd suggest them to improve their basic tier service",
    starIcon: <StarIcon style={iconSize} />,
    starIcon2: <StarIcon style={iconSize} />,
    starIcon3: <StarIcon style={iconSize} />,
    starIcon4: <StarBorderIcon style={iconSize} />,
    starIcon5: <StarBorderIcon style={iconSize} />,
  },
  {
    img: model5,
    name: "Timmy Brown",
    review:
      "I don't get much for the free tier so I shifted to the premium which is quite reliable but I'd be pleased if they worked for providing more facailties for the free and basic tier",
    starIcon: <StarIcon style={iconSize} />,
    starIcon2: <StarIcon style={iconSize} />,
    starIcon3: <StarIcon style={iconSize} />,
    starIcon4: <StarIcon style={iconSize} />,
    starIcon5: <StarBorderIcon style={iconSize} />,
  },
  {
    img: model6,
    name: "Kate Rowlet",
    review:
      "The Cloud service can't get better than that. I used so many hosting and cloud platforms but this one's the best. I'm really looking forward to use this service",
    starIcon: <StarIcon style={iconSize} />,
    starIcon2: <StarIcon style={iconSize} />,
    starIcon3: <StarIcon style={iconSize} />,
    starIcon4: <StarIcon style={iconSize} />,
    starIcon5: <StarIcon style={iconSize} />,
  },
  {
    img: model7,
    name: "Bright Lawski",
    review:
      "I faced some difficulty in the cloud setup and in using cloud functions. But now, I got used to it",
    starIcon: <StarIcon style={iconSize} />,
    starIcon2: <StarIcon style={iconSize} />,
    starIcon3: <StarIcon style={iconSize} />,
    starIcon4: <StarIcon style={iconSize} />,
    starIcon5: <StarBorderIcon style={iconSize} />,
  },
  {
    img: model8,
    name: "Chris Haddin",
    review:
      "This cloud platform is good for those who can spend pretty much a good amount of money but not for those who are there for the free tier",
    starIcon: <StarIcon style={iconSize} />,
    starIcon2: <StarIcon style={iconSize} />,
    starIcon3: <StarBorderIcon style={iconSize} />,
    starIcon4: <StarBorderIcon style={iconSize} />,
    starIcon5: <StarBorderIcon style={iconSize} />,
  },
]
