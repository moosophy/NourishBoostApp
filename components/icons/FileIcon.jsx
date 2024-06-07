import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FileIcon = ({ color, ...props }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <Path
      fill={color}
      d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0l128 128z"
    />
  </Svg>
);

export default FileIcon;

// Icon:
// Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
// License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc

// Source:
// https://fontawesome.com/icons/file?f=classic&s=solid

// Component:
// https://react-svgr.com/playground/?native=true