import styled, { keyframes } from "styled-components"
import tm from "themmer"
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`

const Card = styled.li`
	box-shadow: ${tm`shadow.md`};
	list-style-type: none;
	padding: ${tm`spacing.lg`};
	margin: ${tm`spacing.sm`};
	transition: ${tm`transition.md`};
	background-color: white;
	border-radius: ${tm`radii.sm`};
	flex: 1 auto;
	animation: ${fadeIn} 0.8s ease-in-out;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	min-height: ${p => (p.small ? tm`spacing.lg` : tm`spacing.xxxl`)};

	&:hover {
		box-shadow: ${tm`shadow.lg`};
		transition: ${tm`transition.md`};
	}
`

export default Card
