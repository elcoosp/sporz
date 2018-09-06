import styled from "styled-components"
import tm from "themmer"

const Button = styled.button`
	border-radius: 0;
	border: ${tm`border.sm`};
	color: ${tm`color.pm`};
	background-color: white;
	box-shadow: ${tm`shadow.sm`};
	padding: ${tm`spacing.sm`};
	text-align: center;
	margin: ${tm`spacing.sm`};
	transition: ${tm`transition.md`};
	cursor: pointer;

	&:active {
		transform: scale(0.9);
	}
	&:hover {
		box-shadow: ${tm`shadow.md`};
		transition: ${tm`transition.md`};
	}
`

export default Button
