const fs = require('fs');
const imageThumbnail = require('image-thumbnail');
const option = { width: 50, height: 50, jpegOptions: { force: true } };

exports.imageThumbnail = async (req, res, next) => {
	try {
		const { url } = req.body;
		if (!url) {
			return res.json({ message: 'Enter image url' });
		}
		const random_no = Math.random().toString().split('.').pop();

		const thumbnail = await imageThumbnail({ uri: url }, option);
		fs.writeFileSync(`public/images/new_img${random_no}.jpg`, thumbnail);
		return res.json({
			message: 'Image thumbnail converted',
			url: `http://localhost:6700/images/new_img${random_no}.jpg`,
		});
	} catch (error) {
		console.log(error);
		return next(error);
	}
};
