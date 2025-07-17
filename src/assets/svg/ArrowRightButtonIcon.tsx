import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import { SvgComponentProps } from "./type"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Circle cx={16} cy={16} r={16} fill="#E03B41" />
    <Path
      fill="#fff"
      d="M20.175 17H8v-2h12.175l-5.6-5.6L16 8l8 8-8 8-1.425-1.4 5.6-5.6Z"
    />
  </Svg>
)
export default SvgComponent
