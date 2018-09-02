export const formFromEvent = e =>
	[...new FormData(e.target).entries()].reduce((acc, [k, v]) => {
		acc[k] = v
		return acc
	}, {})

export const pipe = (...fns) => init => fns.reduce((acc, f) => f(acc), init)

export const prevDefault = e => {
	e.preventDefault()
	return e
}

export const tryCatchUndef = f => (...args) => {
	try {
		return f(...args)
	} catch (e) {
		return undefined
	}
}
