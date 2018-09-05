import styled from "styled-components"
import tm from "themmer"

const Input = styled.input`
	border-radius: ${tm`radii.md`};
	border: none;
	box-shadow: ${tm`shadow.sm`};
	padding: ${tm`spacing.sm`};
`

export default Input
