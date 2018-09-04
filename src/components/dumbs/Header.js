import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import tm from "themmer"
import { Routes } from "../../constants"

const S = {}

S.Header = styled.header`
	display: flex;
	background-image: ${tm`gradient.pm`};
`
const Header = () => (
	<S.Header>
		<Link to={Routes.home.path}>{Routes.home.label}</Link>
		<Link to={Routes.exercises.path}>{Routes.exercises.label}</Link>
		<Link to={Routes.programs.path}>{Routes.programs.label}</Link>
	</S.Header>
)

export default Header
