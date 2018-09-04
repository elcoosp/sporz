import typography from "./typography"
import { injectGlobal } from "styled-components"

import styledNormalize from "styled-normalize"
export default () => injectGlobal`
  ${styledNormalize}
    ${typography}`
