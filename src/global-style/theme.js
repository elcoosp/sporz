import { transparentize, darken } from "polished"
/*
pm: primary
sd: secondary
*/
const color = {
	white: "#F2F2F7",
	black: "#080C08",
	pm: "#21D4FD",
	sd: "#550F75"
}

const GRADIENT_DIRECTION = "to left bottom"

const makeLinearGradient = color =>
	`linear-gradient(${GRADIENT_DIRECTION}, ${color}, ${darken(0.3)(color)})`

const gradient = {
	pm: makeLinearGradient(color.pm),
	sd: makeLinearGradient(color.sd)
}

// /*
// sm: small
// md: medium
// lg: large
// */
const lowOpacity = transparentize(0.9)
const shadow = {
	sm: `0px 1px 5px ${lowOpacity(color.black)}`,
	md: `0px 3px 9px ${lowOpacity(color.black)}`,
	lg: `0px 14px 40px ${lowOpacity(color.black)}`
}
const spacing = {
	xs: ".6rem",
	sm: "1rem",
	md: "1.4rem",
	lg: "1.8rem",
	xl: "2.6rem",
	xxl: "3.2rem",
	xxxl: "8rem"
}

const easing = "ease-in-out"
const transition = {
	sm: `all .3s ${easing}`,
	md: `all .5s ${easing}`,
	lg: `all .7s ${easing}`
}

const radii = {
	sm: "6px",
	md: "12px",
	lg: "24px",
	rounded: "50%"
}
const border = {
	sm: `1px solid ${color.pm}`,
	md: `2px solid ${color.pm}`,
	lg: `4px solid ${color.pm}`
}
const font = {
	size: {
		sm: "1rem",
		md: "1.2rem",
		lg: "1.6rem",
		xl: "2.4rem"
	}
}

const theme = {
	color,
	border,
	radii,
	gradient,
	shadow,
	spacing,
	font,
	transition
}

export default theme
