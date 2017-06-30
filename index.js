module.exports = (str, forceOtherLower = false) => {
	const first = str.charAt(0).toUpperCase()
	const rest = forceOtherLower ? str.substring(1).toLowerCase() : str.substring(1)
	return `${first}${rest}`
}