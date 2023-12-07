import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ReactPlayer
          url={videoUrl}
          playing={true}
          controls={true}
          width="300px"
          height="200px"
        />
      ) : (
        <div
          style={{ width: "300px", height: "200px", backgroundColor: "#eee" }}
        >
          {/* Display a placeholder or thumbnail when not hovering */}
          {/* You can customize this part */}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
