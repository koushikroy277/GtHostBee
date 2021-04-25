import React from "react"
import "../style/elem-4.scss"
import CloudIcon from "@material-ui/icons/Cloud"
import StorageIcon from "@material-ui/icons/Storage"
import DomainIcon from "@material-ui/icons/Domain"
import LoopIcon from "@material-ui/icons/Loop"
import ComputerIcon from "@material-ui/icons/Computer"
import EuroIcon from "@material-ui/icons/Euro"
import DoneOutlineIcon from "@material-ui/icons/DoneOutline"

export default function Elem4() {
  return (
    <>
      <div className="serveParent">
        <div className="serviceHead">
          <h1>Our Premium Services</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="serviceBody">
          {serviceData.map((d, i) => (
            <div className="serviceCard" key={i}>
              <div className="serviceIcon">
                <i>{d.icon}</i>
              </div>
              <div className="serviceCardBody">
                <h1>{d.title}</h1>
                <p>{d.des}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="serviceSec">
          <div className="choose">
            <div className="chooseHead">
              <h1>Why choose us</h1>
            </div>
            {chooseData.map((d, i) => (
              <div className="serviceChoose" key={i}>
                <div className="chooseIcon">
                  <span>{d.icon}</span>
                </div>
                <div className="chooseBody">
                  <h1>{d.title}</h1>
                  <p>{d.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const iconStyle = {
  width: 40,
  height: 40,
}

const chooseData = [
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title: "Best Cloud Service out there",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title: "Reliable & High Performant Hardware",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title: "Huge Technical Support",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title: "Great flexibilities with the cloud services",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title: "Special Offers for the students",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title: "Recognized as one of the most reliable cloud service",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title: "Reasonable Prices with quality service",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title: "Advanced AI and ML support in any project",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title: "Easy to Setup any of our services",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
  {
    icon: <DoneOutlineIcon style={iconStyle} />,
    title:
      "Doesn't require any preliminary skills or certification",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
  },
]

const serviceData = [
  {
    title: "VPS Hosting",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    icon: <CloudIcon />,
  },
  {
    title: "Dedicated Hardwares and A+ grade performance",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    icon: <StorageIcon />,
  },
  {
    title:
      "Include Cloud Functions, RealTime Database, Authentication, Push Notification, RealTime ChatSystem & ML-AI Support",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    icon: <DomainIcon />,
  },
  {
    title: "100% Refund Policy",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    icon: <EuroIcon />,
  },
  {
    title: "Lifetime Hosting and Domain with the Ultra Package",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    icon: <LoopIcon />,
  },
  {
    title:
      "Huge support for Web Application, Mobile Application & Desktop Application",
    des:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    icon: <ComputerIcon />,
  },
]
