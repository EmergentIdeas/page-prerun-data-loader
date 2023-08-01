
const filog = require('filter-log')
let log

module.exports = function(app) {
	log = filog('unknown')

	// add a couple javascript based tripartite templates. More a placeholder
	// for project specific templates than it is a useful library.
	require('./add-templates.js')()
	
	require('./add-data-directory.js')()

	// let preRunPrep = require('./page-pre-data-loader.js')
	// let preRun = preRunPrep({ dataFolder: path.join(webhandle.projectRoot, 'data')})
	// webhandle.pageServer.preRun.push(preRun)

}

