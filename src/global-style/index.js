import typography from "./typography"
import { injectGlobal } from "styled-components"
import styledNormalize from "styled-normalize"
import theme from "./theme"
export default () => injectGlobal`
  ${styledNormalize}
  ${typography}
  body {
    overflow-x: hidden;
    background-color: ${theme.color.white}
  }
`
