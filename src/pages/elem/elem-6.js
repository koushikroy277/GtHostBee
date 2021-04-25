import React from "react"
import "../style/elem-6.scss"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import PublicIcon from "@material-ui/icons/Public"
import EmailIcon from "@material-ui/icons/Email"
export default function Elem6() {
  return (
    <>
      <div className="contact">
        <div className="contactBg">
          <div className="contactHead">
            <h1>Contact Us</h1>
            <hr />
            <p>
              Don't be shy. Keep yourself connected with us and share all your
              queries and problems
            </p>
          </div>
          <div className="contactBody">
            <div className="sendContact">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="xyz@gmail.com"
              />
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Your address"
              />
              <input
                type="text"
                name="msg"
                id="msg"
                placeholder="Your message"
              />
            </div>
            <div className="knowContact">
              <div className="knowSec">
                <div className="icon">
                  <LocationOnIcon />
                </div>
                <h1>109/A, 9/A, 109#House, West Carolina City</h1>
              </div>
              <div className="knowSec">
                <div className="icon">
                  <PhoneIcon />
                </div>
                <h1>(208) 333 9296</h1>
              </div>
              <div className="knowSec">
                <div className="icon">
                  <EmailIcon />
                </div>
                <h1>hostbee275general@gmail.com</h1>
              </div>
              <div className="knowSec">
                <div className="icon">
                  <PublicIcon />
                </div>
                <h1>hostbee.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
