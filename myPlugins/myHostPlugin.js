const os = require('os');
module.exports = class MyHostPlugin {
	apply (compiler) {
		// console.log(Object.keys(compiler.hooks));
		compiler.hooks.afterEmit.tap('MyHostPlugin', (stats) => {
			if (this.isDevServer()) {
				setTimeout(() => {
					console.log('\x1B[36m%s\x1B[0m', this.getIP(compiler))
				})
			}
		})
	}
	/**
	 * 获取本机ip地址
	 */
	getIPv4 () {
		const interfaces = os.networkInterfaces();
		const networkMap = interfaces.WLAN.find(network => network.family === 'IPv4' && network.address !== '127.0.0.1')
		return networkMap.address
	}
	getIP (compiler) {
		let isTrueIP = false // 是否是真IP
		let { port = 8080, host = 'localhost' } = (compiler.options.devServer || {})
		if (host === '0.0.0.0') {
			isTrueIP = true
			host = this.getIPv4()
		}
		let ip1 = isTrueIP ? `http://localhost:${port}` : ''
		return `
		  您当前的服务已运行在 http://${host}:${port}
				       ${ip1}
		`
	}
	/**
	 * 判断是不是以 webpack-dev-server 启动的
	 */
	isDevServer () {
		const argv = process.argv
		if (Array.isArray(argv)) {
			return argv[1].includes('webpack-dev-server')
		}
		return false
	}
}