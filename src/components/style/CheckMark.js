import React from "react"
const CheckMark = ({ checked }) => {
	return (
		<div>
			<svg
				width="34px"
				height="62px"
				viewBox="0 0 317 231"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
			>
				<desc>Check mark</desc>
				<defs />
				<g
					id="Page-1"
					stroke="none"
					strokeWidth="1"
					fill="none"
					fillRule="evenodd"
				>
					<g
						id="Check"
						transform="translate(158.455844, 72.136039) rotate(-45.000000) translate(-158.455844, -72.136039) translate(9.955844, -7.863961)"
						fill={checked ? "#228B22" : "#C0C0C0"}
					>
						<rect id="Rectangle" x="0" y="0" width="38" height="160" rx="8" />
						<rect
							id="Rectangle"
							transform="translate(148.500000, 141.000000) rotate(90.000000) translate(-148.500000, -141.000000) "
							x="129.5"
							y="-7.5"
							width="38"
							height="297"
							rx="8"
						/>
					</g>
				</g>
			</svg>
		</div>
	)
}

export default CheckMark
