import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig.json";
function Particle() {
  let mode = ['grab','bubble','repulse']
  particlesConfig['interactivity'].events.onhover.mode = mode[Math.floor(Math.random() * mode.length)]
  // console.log(mode[Math.floor(Math.random() * mode.length)]);
  return (
    <Particles
      params={particlesConfig}
    />
  );
}

export default Particle;
