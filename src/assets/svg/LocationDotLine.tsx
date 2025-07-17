import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgComponentProps } from "./type"
import colors from "@/styles/colors"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke={props.color || colors.mainBorder}
      strokeDasharray="3 3"
      d="M.5 0v60"
    />
  </Svg>
)
export default SvgComponent
