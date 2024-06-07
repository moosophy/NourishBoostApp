import * as React from "react";
import Svg, { Path } from "react-native-svg";

const UtensilsIcon = ({ color, ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <Path
      fill={color}
      d="M416 0c-16 0-128 32-128 176v112c0 35.3 28.7 64 64 64h32v128c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7.1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7 0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16v134.2c0 5.4-4.4 9.8-9.8 9.8-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0S96.8 6.3 96.1 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152h-.6l.3-.7.3.7z"
    />
  </Svg>
);

export default UtensilsIcon;

// Icon:
// Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
// License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc

// Source:
// https://fontawesome.com/icons/utensils?f=classic&s=solid

// Component:
// https://react-svgr.com/playground/?native=true
