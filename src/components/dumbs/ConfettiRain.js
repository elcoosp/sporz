import React from "react"
import Confetti from "react-confetti"
import sizeMe from "react-sizeme"

const ConfettiRain = sizeMe({
	monitorHeight: true,
	monitorWidth: true
})(({ size }) => (
	<div
		style={{
			zIndex: -1,
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%"
		}}
	>
		<Confetti {...size} />
	</div>
))

export default ConfettiRain
