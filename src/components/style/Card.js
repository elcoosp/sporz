import styled from "styled-components"
import tm from "themmer"

const Card = styled.li`
	box-shadow: ${tm`shadow.sm`};
	list-style-type: none;
	padding: ${tm`spacing.lg`};
	margin: ${tm`spacing.sm`};
	transition: ${tm`transition.md`};
	background-color: white;
	border-radius: ${tm`radii.md`};
	flex: 1 auto;

	&:hover {
		box-shadow: ${tm`shadow.lg`};
		transition: ${tm`transition.md`};
	}
`

export default Card
