import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgComponentProps } from "./type"
import colors from "@/styles/colors"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color || colors.iconWhite}
      d="M21.664 16a1 1 0 0 1-1 1H18.48c-.414 1-1.514 2-2.816 2-1.302 0-2.402-1-2.816-2H2.664a1 1 0 1 1 0-2h10.184c.414-1 1.514-2 2.816-2 1.302 0 2.402 1 2.816 2h2.184a1 1 0 0 1 1 1Zm-19-7h2.184c.415 1 1.514 2 2.816 2 1.302 0 2.402-1 2.816-2h10.184a1 1 0 1 0 0-2H10.48c-.414-1-1.514-2-2.816-2-1.302 0-2.402 1-2.816 2H2.664a1 1 0 1 0 0 2Z"
    />
  </Svg>
)
export default SvgComponent
