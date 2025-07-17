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
      strokeWidth={1.5}
      d="M1 10a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9.002 9.002 0 0 0-8.251 5.4M1 3.25l.45 3.6 3.6-.9"
    />
    <Path
      stroke={props.color || colors.mainRed}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.453 8.255c-.09-.686-.875-1.796-2.29-1.796-1.643 0-2.335.913-2.475 1.368-.219.61-.176 1.864 1.751 2.001 2.408.171 3.373.456 3.25 1.932-.123 1.476-1.465 1.796-2.526 1.762-1.06-.035-2.796-.522-2.864-1.836M9.995 5.05v1.413m0 7.05v1.437"
    />
  </Svg>
)
export default SvgComponent
