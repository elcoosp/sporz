import React from "react"

import { Progress } from "react-sweet-progress"
import theme from "../../global-style/theme"
import "react-sweet-progress/lib/style.css"
const CircularPie = ({ remaining, total }) => (
	<Progress
		type="circle"
		percent={(1 - remaining / total) * 100}
		status="success"
		strokeWidth={3}
		theme={{
			default: {
				symbol: remaining + "s"
			},
			success: {
				symbol: remaining + "s",
				color: theme.color.pm
			}
		}}
	/>
)

export default CircularPie
