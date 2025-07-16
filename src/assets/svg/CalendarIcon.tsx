import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { SvgComponentProps } from "./type"

const SvgComponent = (props: SvgComponentProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#E03B41"
      fillRule="evenodd"
      d="M5.717 0c.577 0 1.044.467 1.044 1.043v.348h3.478v-.348a1.043 1.043 0 0 1 2.087 0v.348h.348A3.826 3.826 0 0 1 16.5 5.217v6.957A3.826 3.826 0 0 1 12.674 16H4.326A3.826 3.826 0 0 1 .5 12.174V5.217a3.826 3.826 0 0 1 3.826-3.826h.348v-.348C4.674.467 5.14 0 5.717 0ZM4.674 3.478h-.348a1.74 1.74 0 0 0-1.739 1.74v.347h11.826v-.348a1.74 1.74 0 0 0-1.74-1.739h-.347v.348a1.044 1.044 0 0 1-2.087 0v-.348H6.761v.348a1.043 1.043 0 0 1-2.087 0v-.348Zm9.739 4.174H2.587v4.522a1.74 1.74 0 0 0 1.74 1.739h8.347a1.74 1.74 0 0 0 1.739-1.74v-4.52Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
