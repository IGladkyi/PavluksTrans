import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgComponentProps } from "./type"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      d="M4 19v-2h2v-7c0-1.383.417-2.608 1.25-3.675A5.745 5.745 0 0 1 10.5 4.2v-.7c0-.417.142-.767.425-1.05.3-.3.658-.45 1.075-.45.417 0 .767.15 1.05.45.3.283.45.633.45 1.05v.7a5.745 5.745 0 0 1 3.25 2.125C17.583 7.392 18 8.617 18 10v7h2v2H4Zm8 3a1.99 1.99 0 0 1-1.425-.575A1.99 1.99 0 0 1 10 20h4c0 .55-.2 1.025-.6 1.425-.383.383-.85.575-1.4.575Zm-4-5h8v-7c0-1.1-.392-2.042-1.175-2.825C14.042 6.392 13.1 6 12 6s-2.042.392-2.825 1.175C8.392 7.958 8 8.9 8 10v7Z"
    />
  </Svg>
)
export default SvgComponent
