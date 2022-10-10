import React from "react";

const VideoEmbed = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="1000px"
              height="500px"
              style={{ borderRadius: "25px" }}
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/hVaeQUr_RXo"
              frameborder="0"
              allow="`gyroscope` `accelerometer` `picture-in-picture` `encrypted-media` `clipboard-write`"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
