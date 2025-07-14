import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgComponentProps } from "./type"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      stroke={props.color}
      strokeWidth={0.2}
      d="M14.906 15.52a1.32 1.32 0 0 1 1.866 0l3.327 3.328a1.32 1.32 0 0 1-1.866 1.866l-3.327-3.327a1.32 1.32 0 0 1 0-1.867ZM8.72.9c4.643 0 8.42 3.777 8.42 8.42s-3.777 8.42-8.42 8.42S.3 13.963.3 9.32 4.077.9 8.72.9Zm0 2.64a5.789 5.789 0 0 0-5.78 5.78 5.788 5.788 0 0 0 5.78 5.78 5.788 5.788 0 0 0 5.78-5.78 5.788 5.788 0 0 0-5.78-5.78Z"
    />
  </Svg>
)
export default SvgComponent
