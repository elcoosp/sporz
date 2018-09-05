import styled from "styled-components"
import tm from "themmer"

const Badge = styled.div`
	font-size: ${tm`font.size.sm`};
	padding: ${tm`spacing.sm`};
	margin: ${tm`spacing.sm`};
	background-image: ${tm`gradient.pm`};
	color: white;
	border-radius: ${tm`radii.sm`};
	text-align: center;
`

export default Badge
