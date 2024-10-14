import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BaconIcon = ({ color, ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <Path
      fill={color}
      d="M439.2 1.2c11.2-3.2 23.2-.1 31.4 8.1L518 56.7l-26.5 7.9c-58 16.6-98.1 39.6-129.6 67.4-31.2 27.5-53.2 59.1-75.1 90.9l-2.3 3.3C241.6 288.7 195 356.6 72.8 417.7l-34.9 17.5-28.5-28.6c-7.3-7.3-10.6-17.6-9-27.8s8.1-18.9 17.3-23.5c118.4-59.1 163.2-124.3 205.6-186l2.3-3.4c21.8-31.8 44.9-64.9 77.7-93.9 33.4-29.5 75.8-53.6 135.9-70.8zM61.8 459l25.4-12.7c129.5-64.7 179.9-138.1 223.8-202l2.2-3.3c22.1-32.1 42.1-60.5 69.9-85.1 27.5-24.3 63.4-45.2 117.3-60.6l.2-.1 43.1-12.9 23 23c8 8 11.2 19.7 8.3 30.7s-11.3 19.6-22.2 22.7c-51.9 14.8-85.6 34.7-111.1 57.2-26.1 23-45.1 49.9-67.3 82.1l-2.2 3.2c-44.4 64.7-96.7 140.8-229.9 207.4-12.3 6.2-27.2 3.7-36.9-6L61.8 459z"
    />
  </Svg>
);

export default BaconIcon;

// Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
// License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc

// Icon:
// https://fontawesome.com/icons/bacon?f=classic&s=solid

// React Component:
// https://react-svgr.com/playground/?native=true
