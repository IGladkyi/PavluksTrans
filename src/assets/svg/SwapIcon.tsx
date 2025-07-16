import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { SvgComponentProps } from "./type"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Rect
      width={34}
      height={34}
      x={0.5}
      y={0.5}
      fill="#F8F8F8"
      stroke="#E0E0E0"
      rx={17}
      transform="matrix(0 1 1 0 0 0)"
    />
    <Path
      stroke="#E72027"
      strokeWidth={2}
      d="m11 21.6 4.25 3.4V11.4m8.5 3.4-4.25-3.4V25"
    />
  </Svg>
)
export default SvgComponent
