import React from "react";
import "./OnlineClasses.css";

const OnlineClasses = () => {
  return (
    <div className="outer-container">

      <div className="inner-container">
        <h2>Online Classes</h2>
        <p>
          Dear Students/Parents, Nifa presents its Learning App for your regular
          art practice in which we have added many amazing features Like:
          Step-by-step recorded demo videos prepared by your faculty members.
          Regular assessment of your practise through assignment section. Live
          class section from same app. Attendance, payment invoice, art news,
          announcements, important information and direct connect with the
          management team are some more features. So hurry up n join now to
          experience personalised coaching by experts sitting at your home.
        </p>
        <p>We wish u Happy Learning. Stay Safe n Healthy.</p>
        <button className="btn btn-primary">Read More</button>

        <div className="logos">
          <h3>Download The App</h3>
          <ul className="logo">
            <li className="">
              <img
                className="gplay-logo"
                src="https://www.nifafinearts.com/images/gplay.png"
                alt=""
              />
            </li>
            <li className="">
              <img
                className="appstore-logo"
                src="https://www.nifafinearts.com/images/appstore.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/-9cJjaLXKqE?si=oAVse93yonYJSP5A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default OnlineClasses;
