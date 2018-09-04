import { css } from "styled-components"
import media from "styled-media-query"

const typography = css`
:root {
    font-family: 'Montserrat','Avenir Next', sans-serif;
    font-size: 14px;

    ${media.greaterThan("small")`
      font-size: 16px;
    `}

    ${media.greaterThan("medium")`
      font-size: 18px;
    `}

    ${media.greaterThan("large")`
      font-size: 22px;
    `}

    ${media.greaterThan("huge")`
      font-size: 26px;
    `}
}
  `
export default typography
