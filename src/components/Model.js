import '@google/model-viewer';

export default function Model() {
  function linkHandler(e, url) {
    e.preventDefault();
    window.open(url, '_blank');
  }

  return (
    <model-viewer
      id="model"
      src="./models/RobotExpressive.glb"
      ios-src=""
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      ar
      ar-modes="scene-viewer webxr quick-look"
      camera-orbit="17.95deg 85.97deg 16.01m"
      auto-rotate
      autoplay
    >
      <button
        onClick={(e) => linkHandler(e, 'https://sekurovillage.com')}
        className="relative z-10 w-2 h-2 p-2 bg-white rounded-full shadow-lg flex items-center justify-center"
        slot="hotspot-1"
        data-position="-0.54 0.93 0.1"
        data-normal="-0.73 0.05 0.69"
        data-visibility-attribute="visible"
      >
        <div
          className="bg-white/60 text-black font-bold rounded-full py-2 px-3 text-sm shadow-lg cursor-pointer hover:bg-white/80 transition-all duration-200 ease-in-out block absolute w-max left-[calc(100%+.4rem)]"
        >
          Visit Our Website
        </div>
      </button>
    </model-viewer>
  )
}
