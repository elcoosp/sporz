import styled from "styled-components"
import Button from "./Button"
import { Link } from "react-router-dom"

const ButtonLink = Button.withComponent(styled(Link)`
	text-decoration: none;
`)

export default ButtonLink
