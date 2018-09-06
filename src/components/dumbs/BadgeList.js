import React from "react"
import styled from "styled-components"
import { H2, Badge } from "../style"
const S = {}

S.List = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`

const BadgeList = ({
	items,
	badgeContentProp,
	title,
	badgeClickHandler,
	children
}) => {
	return (
		<div>
			<H2>{title}</H2>
			<S.List>
				{items.map(item => (
					<Badge onClick={() => badgeClickHandler(item)} key={item.id}>
						{item[badgeContentProp]}
					</Badge>
				))}
				{children}
			</S.List>
		</div>
	)
}

export default BadgeList
