import React, { useState } from 'react';
import '../styles/VideoPlayer.css';


const videos = [
  'src\assets\Deepfake example. Original_Deepfake close shot Bill Gates..mp4',
  'src\assets\Deepfake Example. Original_Deepfake Elon Musk..mp4',
  'src\assets\Deepfake Example. Original_Deepfake Elon Musk..mp4',
];

const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleDotClick = (index) => {
    setCurrentVideo(index);
  };

  return (
    <div className="video-container">
      <div className="tv-effect">
        <video src={videos[currentVideo]} controls autoPlay loop className="video" />
      </div>
      <div className="dots">
        {videos.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentVideo === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
