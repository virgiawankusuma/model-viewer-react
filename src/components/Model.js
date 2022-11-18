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
    </model-viewer>
  )
}