import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ScaleIcon = ({ color, ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path
      fill={color}
      d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1-256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-56.2zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5.3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40 0 22.1 17.9 40 40 40s40-17.9 40-40z"
    />
  </Svg>
);
export default ScaleIcon;

// Icon:
// Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
// License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc

// Source:
// https://fontawesome.com/icons/weight-scale?f=classic&s=solid

// Component:
// https://react-svgr.com/playground/?native=true