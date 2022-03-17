const reg = /export default\s([\s\S]*)/
module.exports = function (source) {
	// 提取export default 后面的内容
	const result = source.match(reg)[1]
	const json = JSON.parse(result)
	const cssText = json[0][1]
	const  a= `
		const style = document.createElement('style')
		style.innerHTML = \`${cssText}\`
		document.head.appendChild(style)
		${source}
	`
	return a
}