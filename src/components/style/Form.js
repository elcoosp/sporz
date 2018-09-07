import styled from "styled-components"
import tm from "themmer"
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	min-height: 10rem;
	padding: ${tm`spacing.md`};
`

export default Form
