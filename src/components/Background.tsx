import React from 'react';
import Particles from 'react-particles-js';

type BackgroundProps = {
  className?: string;
};

const Background: React.FC<BackgroundProps> = ({ className }) => (
  <Particles
    className={className}
    params={{
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 1500,
          },
        },
        line_linked: {
          enable: true,
          opacity: 0.1,
        },
        move: {
          speed: 0.4,
        },
        size: {
          value: 1.5,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.2,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

export default Background;
