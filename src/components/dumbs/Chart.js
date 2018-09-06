import React from "react"
import theme from "../../global-style/theme"
import { Card } from "../style"
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts"
import TimeAgo from "react-timeago"

const CustomTooltip = ({ active, payload, label }) => {
	if (!active) return null
	const { repetitions, timestamp } = payload[0].payload
	return (
		<Card small>
			{`${repetitions} repetitions`}
			<TimeAgo date={timestamp} />
		</Card>
	)
}
const Chart = ({ data, dataKey }) => (
	<ResponsiveContainer width="100%" height={300}>
		<LineChart data={data}>
			<Line type="monotone" dataKey={dataKey} stroke={theme.color.sd} />
			<Tooltip content={<CustomTooltip />} />
		</LineChart>
	</ResponsiveContainer>
)

export default Chart
