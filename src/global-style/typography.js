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
      font-size: 20px;
    `}

    ${media.greaterThan("huge")`
      font-size: 22px;
    `}
}
  `
export default typography
