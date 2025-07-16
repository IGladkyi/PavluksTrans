import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgComponentProps } from "./type"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Path
      stroke="#E72027"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M8.454 8.15c2.11 0 3.76-1.608 3.76-3.575C12.214 2.61 10.564 1 8.546 1c-2.11 0-3.76 1.609-3.76 3.576 0 1.966 1.65 3.574 3.668 3.574Zm0 0C4.51 8.15 1.3 11.19 1.3 15.034 3.318 16.284 5.702 17 8.454 17s5.228-.715 7.246-1.966c0-3.844-3.21-6.884-7.246-6.884Z"
    />
  </Svg>
)
export default SvgComponent
