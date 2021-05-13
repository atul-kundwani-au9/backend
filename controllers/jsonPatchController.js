const jsonPatch = require('jsonpatch');

exports.jsonConvert = (req, res, next) => {
	try {
		const { json_object, patch } = req.body;
		const new_json = jsonPatch.apply_patch(json_object, patch);
		res.send(new_json);
	} catch (error) {
		return next(error);
	}
};
