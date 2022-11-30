/* eslint-disable no-unused-vars */
import '@google/model-viewer';
import React, { useEffect, useState } from 'react';

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

  const PlayAudio = () => {
    audio.play();
  }

  return (
    <model-viewer
      onClick={() => PlayAudio()}
      id="model"
      src="./models/kura12.glb"
      ios-src=""
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      ar
      // ar-modes="scene-viewer webxr quick-look"
      // ar-modes="webxr quick-look scene-viewer"
      // ar-modes="quick-look webxr scene-viewer"
      modes="webxr scene-viewer quick-look"
      camera-orbit="17.95deg 85.97deg 16.01m"
      auto-rotate
      autoplay
    >
      <button
        onClick={(e) => linkHandler(e, 'tel:02917701999')}
        className="relative z-10 p-[6px] bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse hover:animate-none"
        slot="hotspot-9" 
        data-position="0.11822734465857843m 0.1236534911594938m -0.04523120424710214m" data-normal="0m 0m 1m" d
        ata-visibility-attribute="visible"
      >
        <div
          className="bg-white/80 text-black font-bold rounded-full py-2 px-3 text-sm shadow-lg cursor-pointer hover:bg-white transition-all duration-200 ease-in-out block absolute w-max top-[calc(100%+.3rem)]"
        >
          Contact Us
        </div>
      </button>
      <button
        onClick={(e) => linkHandler(e, 'https://sekurovillage.digidaxa.com')}
        className="relative z-10 p-[6px] bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse hover:animate-none"
        slot="hotspot-10" 
        data-position="-0.12218712196472194m 0.12394519401900589m -0.04261490154659383m" data-normal="-3.264378720429288e-10m -8.193775260336006e-8m 0.9999999999999967m" data-visibility-attribute="visible"
      >
        <div
          className="bg-white/80 text-black font-bold rounded-full py-2 px-3 text-sm shadow-lg cursor-pointer hover:bg-white transition-all duration-200 ease-in-out block absolute w-max top-[calc(100%+.3rem)]"
        >
          Virtual Tour
        </div>
      </button>

      <audio 
        id="audio"
        loop
      >
        <source src="/bgm/onesummerday.mp3" type="audio/mpeg"></source>
      </audio>
    </model-viewer>
  )
}
