import styled from "styled-components"
import tm from "themmer"

const H1 = styled.h1`
	text-align: center;
	background-image: ${tm`gradient.sd`};
	padding: ${tm`spacing.md`};
	margin: ${tm`spacing.xl`};
	font-size: ${tm`font.size.xl`};

	color: white;
	border-radius: ${tm`radii.lg`};
`

export default H1
