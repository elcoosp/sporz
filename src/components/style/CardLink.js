import { Link } from "react-router-dom"
import Card from "./Card"
import styled from "styled-components"
export default Card.withComponent(styled(Link)`
	cursor: pointer;
	text-decoration: none;
`)
