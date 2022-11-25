/* eslint-disable no-unused-vars */
import '@google/model-viewer';
import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player";

export default function Model() {
  const [model, setModel ] = useState(null);
  const [audio, setAudio] = useState(null);
  
  useEffect(() => {
    setModel(document.querySelector('#model'));
    setAudio(document.querySelector('#audio'));
  }, []);
    
  const getCord = async (event) => 
  {
    console.log(event.screenX, event.screenY) 
    const vals = model.positionAndNormalFromPoint( event.screenX, event.screenY )
    console.log(vals)
  }

  const linkHandler = (e, url) => {
    e.preventDefault();
    window.open(url, '_blank');
  }

  
  if(model) {
    audio.play();
  }

  return (
    <model-viewer
      onClick={getCord}
      id="model"
      src="./models/kurokuro.glb"
      ios-src=""
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      ar
      // ar-modes="scene-viewer webxr quick-look"
      ar-modes="webxr quick-look scene-viewer"
      // ar-modes="quick-look webxr scene-viewer"
      camera-orbit="17.95deg 85.97deg 16.01m"
      auto-rotate
      autoplay
    >
      <button
        onClick={(e) => linkHandler(e, 'https://sekurovillage.com')}
        className="relative z-10 p-[6px] bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse hover:animate-none"
        slot="hotspot-1"
        data-position="0.0328607537850399m 0.06633109121880185m -0.013010329962359991m"
        data-normal="0.6289291004261345m -0.3165854963824588m 0.7100857765914239m"
        data-visibility-attribute="visible"
      >
        <div
          className="bg-white/80 text-black font-bold rounded-full py-2 px-3 text-sm shadow-lg cursor-pointer hover:bg-white transition-all duration-200 ease-in-out block absolute w-max left-[calc(100%+.3rem)]"
        >
          Visit Our Website
        </div>
      </button>
      <button
        className="relative z-10 p-[6px] bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse hover:animate-none"
        slot="hotspot-2"
        data-position="0.02610224m 0.01458751m -0.004978945m" 
        data-normal="-0.602551m 0.7856147m -0.1405055m"
        data-visibility-attribute="visible"
      >
        <div
          className="bg-white/80 text-black font-bold rounded-full py-2 px-3 text-sm shadow-lg cursor-pointer hover:bg-white transition-all duration-200 ease-in-out block absolute w-max right-[calc(100%+.3rem)]"
        >
          Hello
        </div>
      </button>
      {/* <ReactPlayer 
        // url={[
          //   {src: '/bgm/onesummerday.mp3', type: 'audio/mp3'},
        // ]}  
        id="audio"
        url="/bgm/onesummerday.mp3"
        width="400px"
        height="50px"
        playing={true}
        controls={true}
      /> */}
      <audio 
        id="audio"
        // controls
        loop
      >
        <source src="/bgm/onesummerday.mp3" type="audio/mpeg"></source>
      </audio>
    </model-viewer>
  )
}
