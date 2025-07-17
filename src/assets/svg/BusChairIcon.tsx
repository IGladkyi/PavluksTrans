import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgComponentProps } from "./type"
import colors from "@/styles/colors"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke={props.color || colors.mainRed}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M7.25 8.083H2.667m1.666 6.25 2.5 3.333m0 0H11m-4.167 0H2.667m7.931-3.333H2.69c-.933 0-1.69-.743-1.69-1.66 0-1.257 1.69-1.662 1.69-1.662S5.763 9.83 9.333 11c0 0 .116-4.273 1.909-9.025.354-.937 1.507-1.257 2.354-.703a1.616 1.616 0 0 1 .705 1.675l-2.045 10.05a1.683 1.683 0 0 1-1.658 1.336Z"
    />
  </Svg>
)
export default SvgComponent
