import React from 'react';
import './Video.scss';

const Video: React.FC = () => {
  return (
    <div className="videoPage">
      <div className="video">
        <iframe
          title="casseta"
          src="https://player.vimeo.com/video/846045779?h=da85e15709&color=f09bdd&byline=0&portrait=0"
          width="1280"
          height="720"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <div className="video_description">
          KASSETA is an artist I've wanted to work with for a long time. Bright visuals and sound -
          there was a feeling that we would get an unusual project. We met in Tbilisi and decided to
          make a video. We tried a few compositions and everything came together for me on this
          track. A state of quiet panic and hopelessness inside. The hero tries to fight it and in
          doing so, drives himself to paranoia. Places and characters get mixed up while the
          narrative loses its meaning. It was very close to what was happening to us in the
          production process, ah. The only thing I wanted to add to the composition vibe was the
          ability to come out of this state in the finale.
        </div>
      </div>
      <div className="spacer" />
      <div className="video">
        <iframe
          title="casseta"
          src="https://player.vimeo.com/video/732919858?h=27404ec054?h=da85e15709&color=f09bdd&byline=0&portrait=0"
          width="1280"
          height="720"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <div className="video_description">description</div>
      </div>
      <div className="spacer" />
      <div className="video">
        <iframe
          title="casseta"
          src="https://player.vimeo.com/video/734333585?h=27404ec054?h=da85e15709&color=f09bdd&byline=0&portrait=0"
          width="1280"
          height="720"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <div className="video_description">description</div>
      </div>
      <div className="spacer" />
      <div className="video">
        <iframe
          title="casseta"
          src="https://player.vimeo.com/video/549016193?h=da85e15709&color=f09bdd&byline=0&portrait=0"
          width="1280"
          height="720"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        <div className="video_description">description</div>
      </div>
    </div>
  );
};

export default Video;
