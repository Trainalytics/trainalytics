const packagejson = require('../../package.json');

export const environment = {
	production: false,
	version: packagejson.version
}
