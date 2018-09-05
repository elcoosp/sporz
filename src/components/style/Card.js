import styled from "styled-components"
import tm from "themmer"

const Card = styled.li`
	box-shadow: ${tm`shadow.md`};
	list-style-type: none;
	padding: ${tm`spacing.lg`};
	margin: ${tm`spacing.sm`};
	transition: ${tm`transition.md`};
	background-color: white;
	border-radius: ${tm`radii.sm`};
	flex: 1 auto;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	min-height: ${tm`spacing.xxxl`};

	&:hover {
		box-shadow: ${tm`shadow.lg`};
		transition: ${tm`transition.md`};
	}
`

export default Card
