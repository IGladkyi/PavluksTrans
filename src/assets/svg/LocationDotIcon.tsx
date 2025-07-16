import * as React from "react"
import Svg, { Circle } from "react-native-svg"
import { SvgComponentProps } from "./type"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Circle cx={8.5} cy={8} r={8} fill="#D7D9E7" />
    <Circle
      cx={8.5}
      cy={8}
      r={3}
      fill="#FEFEFF"
      stroke="#E72027"
      strokeWidth={2}
    />
  </Svg>
)
export default SvgComponent
