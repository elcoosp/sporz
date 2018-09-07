import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import tm from "themmer"
import { Routes } from "../../constants"

const S = {}
const active = "active"
S.Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-image: ${tm`gradient.sd`};
	box-shadow: ${tm`shadow.sm`};
`
S.MenuItem = styled(NavLink)`
	text-decoration: none;
	padding: ${tm`spacing.md`};
	color: white;
	transition: ${tm`transition.lg`};
	border-bottom: 5px solid transparent;
	&:hover {
		border-bottom: 5px solid ${tm`color.white`};
	}
	&.${active} {
		border-bottom: 5px solid ${tm`color.pm`};

		transition: ${tm`transition.lg`};
	}
`

const MenuItem = ({ to }) => (
	<S.MenuItem exact activeClassName={active} to={Routes[to].path}>
		{Routes[to].label}
	</S.MenuItem>
)

const Header = () => (
	<S.Header>
		<MenuItem to="home" />
		<MenuItem to="exercises" />
		<MenuItem to="programs" />
	</S.Header>
)

export default Header
