import '@google/model-viewer';

export default function Model() {
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
        class="Hotspot"
        slot="hotspot-1"
        data-position="-0.24238125964406976m 3.6610296115703345m -17.166091273942357m"
        data-normal="0.24806833274829235m 0.3541736323103048m 0.9016779582886605m"
        data-visibility-attribute="visible"
      >
        <div class="HotspotAnnotation">Dragons!</div>
      </button>
    </model-viewer>
  )
}
