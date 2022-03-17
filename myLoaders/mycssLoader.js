const { getOptions, stringifyRequest, parseString, parseQuery, getCurrentRequest } = require('loader-utils')
module.exports = function (source) {
	const options = getOptions(this);
	const list = []
	const path = this._module.resourceResolveData.relativePath // 解析文件相对路径
	list.push([path, source], options)
	// return this.callback(null, `export default ${JSON.stringify(list)}`)
	return `export default ${JSON.stringify(list)}`
}