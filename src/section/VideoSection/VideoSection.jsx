import { useState } from "react";
import { Images } from "../../Images/Images";

import Buttons from "../../components/Buttons/Buttons";
import FlotingButton from "../../components/FlotingButton/FlotingButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Text from "../../components/Text/Text";

import "./VideoSection.css";

// eslint-disable-next-line react/prop-types
const VideoSection = ({ textButtonVideo, href }) => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const toggleVideoPlayback = () => {
    const videoElement = document.getElementById("video");

    if (videoElement) {
      if (isVideoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }

      setVideoPlaying(!isVideoPlaying);
    }
  };
  return (
    <>
      <div className="container-header-video">
        <div className="container-text-video-header">
          <Text
            text="“Espacios para vivir experiencias únicas”"
            color="#FF5D02"
            textAlign="center"
          />
          <div className="container-btn-header">
            <Buttons text={textButtonVideo} href={href} />
          </div>
        </div>

        <div className="container-video">
          <div className="container-icon-header">
            <FlotingButton
              icon={<PlayArrowIcon />}
              className="styled-icon-play"
              onClick={toggleVideoPlayback}
            />
          </div>
          <video src={Images.video} id="video" muted></video>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
