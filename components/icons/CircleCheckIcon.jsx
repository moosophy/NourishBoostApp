import * as React from "react";
import Svg, { Path } from "react-native-svg";

const CircleCheckIcon = ({ primaryColor, secondaryColor, ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path
      fill={secondaryColor}
      d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm113-303L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
      className="fa-secondary"
    />
    <Path
      fill={primaryColor}
      d="M369 175c9.4 9.4 9.4 24.6 0 33.9L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0z"
      className="fa-primary"
    />
  </Svg>
);

export default CircleCheckIcon;

// Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
// License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc

// Icon:
// https://fontawesome.com/icons/circle-check?f=classic&s=solid

// React Component:
// https://react-svgr.com/playground/?native=true
