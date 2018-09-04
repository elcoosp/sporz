import { css } from "styled-components"
import media from "styled-media-query"

const typography = css`
:root {
    font-family: 'Avenir Next';
    font-size: 16px;

    ${media.greaterThan("small")`
      font-size: 18px;
    `}

    ${media.greaterThan("medium")`
      font-size: 20px;
    `}

    ${media.greaterThan("large")`
      font-size: 22px;
    `}

    ${media.greaterThan("huge")`
      font-size: 24px;
    `}
}
  `
export default typography
