import styled from "styled-components"
import tm from "themmer"

const Button = styled.button`
	border-radius: ${tm`radii.md`};
	border: ${tm`border.sm`};
	color: ${tm`color.pm`};
	background-color: white;
	box-shadow: ${tm`shadow.sm`};
	padding: ${tm`spacing.sm`};
	transition: ${tm`transition.md`};
	cursor: pointer;
	&:hover {
		box-shadow: ${tm`shadow.md`};
		transition: ${tm`transition.md`};
	}
`

export default Button