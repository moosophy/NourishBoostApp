import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RulerInclinedIcon = ({ color, ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path
      fill={color}
      d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0l-92.1-92.2c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48L333.9 18C352.6-.7 383-.7 401.8 18l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9l-316 316.1z"
    />
  </Svg>
);

export default RulerInclinedIcon;

// Icon:
// Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
// License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc

// Source:
// https://fontawesome.com/icons/ruler?f=classic&s=solid

// Component:
// https://react-svgr.com/playground/?native=true