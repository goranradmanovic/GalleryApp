module.exports = {

	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/sass/_main.sass"`
			}
		}
	},

	devServer: {
		proxy: 'https://portal-tb.lynxx.co'
	}
}