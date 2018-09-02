import React from "react"
import { Link } from "react-router-dom"

import { Routes } from "../../constants"

const Header = () => (
	<header>
		<Link to={Routes.home.path}>{Routes.home.label}</Link>
		<Link to={Routes.exercises.path}>{Routes.exercises.label}</Link>
		<Link to={Routes.programs.path}>{Routes.programs.label}</Link>
	</header>
)

export default Header
