import * as React from "react";
import ParticleImage, { ParticleOptions } from "react-particle-image";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 10;
  },
  color: ({ x, y, image }) => "ff11f0"
};

export default function App() {
  return (
    <ParticleImage
      src={"/react-logo.png"}
      scale={0.55}
      entropy={40}
      maxParticles={4200}
      particleOptions={particleOptions}
    />
  );
}
