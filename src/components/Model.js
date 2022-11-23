import '@google/model-viewer';

export default function Model() {
  function linkHandler(e, url) {
    e.preventDefault();
    window.open(url, '_blank');
  }

  const getCord = async (event) => 
  { 
    console.log(event.screenX, event.screenY) 
    const modelViewer = document.querySelector('#model')
    const vals = modelViewer.positionAndNormalFromPoint( event.screenX, event.screenY )
    console.log(vals) 
  }

  return (
    <model-viewer
      // onClick={getCord}
      id="model"
      src="./models/RobotExpressive.glb"
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
        data-position="0.6905173210524418 2.327633420972052 0.24685388734178382"
        data-normal="0.00023907706874392375 -0.9999999709356447 0.00003115870601969318"
        data-visibility-attribute="visible"
      >
        <div
          className="bg-white/80 text-black font-bold rounded-full py-2 px-3 text-sm shadow-lg cursor-pointer hover:bg-white transition-all duration-200 ease-in-out block absolute w-max left-[calc(100%+.3rem)]"
        >
          Visit Our Website
        </div>
      </button>
    </model-viewer>
  )
}
