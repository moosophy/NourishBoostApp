import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AngleUpIcon = ({ color, ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <Path
      fill={color}
      d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
    />
  </Svg>
);

export default AngleUpIcon;

// Icon:
// Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
// License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc

// Component:
// https://react-svgr.com/playground/?native=true
