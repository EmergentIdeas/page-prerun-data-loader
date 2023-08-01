const path = require('path')
const webhandle = require('webhandle')
const preRunPrep = require('./page-prerun-data-loader')

/**
 * Adds the directory 'data' which is a child of the project root as a source of information that
 * pages can load.
 */
function addDataDirectory() {
	let preRun = preRunPrep({ dataFolder: path.join(webhandle.projectRoot, 'data')})
	webhandle.pageServer.preRun.push(preRun)
}
module.exports = addDataDirectory