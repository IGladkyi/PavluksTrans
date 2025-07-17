import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgComponentProps } from "./type"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#3AAA35"
      d="M9.18 3H.346L0 4.535h2.13L1.255 9.52l1.2 1.48 1.13-6.461H9.18a.765.765 0 0 0 .49-.152.86.86 0 0 0 .306-.438C10.1 3.465 9.712 3 9.181 3Z"
    />
    <Path
      fill="#009FE3"
      d="M15.299 1.037C14.647.35 13.502 0 11.898 0H.44L0 2.176h10.832c.797 0 1.339.182 1.656.555.273.317.354.754.244 1.299-.294 1.454-1.53 1.76-2.513 1.76H5.496L4.36 11.418 6.868 14l1.217-6.035h2.086c1.623 0 2.934-.363 3.898-1.079a4.758 4.758 0 0 0 1.822-2.966c.256-1.243.062-2.192-.592-2.883Z"
    />
  </Svg>
)
export default SvgComponent
