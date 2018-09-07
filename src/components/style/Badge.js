import styled, { css, keyframes } from "styled-components"
import tm from "themmer"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const Badge = styled.div`
${p =>
	p.cursorPointer &&
	css`
		cursor: pointer;
	`}
	font-size: ${tm`font.size.sm`};
	padding: ${tm`spacing.sm`};
	margin: ${tm`spacing.sm`};
	background-image: ${tm`gradient.pm`};
	color: white;
	border-radius: ${tm`radii.sm`};
	text-align: center;
	animation: ${fadeIn} .3s ease-in-out;
`

export default Badge
