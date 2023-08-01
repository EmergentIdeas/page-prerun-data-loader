let FileSink = require('file-sink')
let filog = require('filter-log')
let log = filog('page-pre-data-loader:')

/**
 * 
 * @param {object} options
 * @param {string} options.dataFolder The location of the data files
 * @returns 
 */
function createDataLoader({dataFolder} = {}) {
	let fileSink = new FileSink(dataFolder)

	let loader = async (req, res, next) => {
		if (res.locals.page && res.locals.page.dataFiles) {
			for(let fileSpec of res.locals.page.dataFiles) {
				let {name, location} = fileSpec
				
				try {
					let content = await fileSink.read(location)
					let data = JSON.parse(content)
					res.locals[name] = data

				}
				catch(e) {
					log.error({
						msg: `Could not load file ${location}`,
						error: e
					})
				}
			}
		}
		next()
	}
	
	return loader
}

module.exports = createDataLoader