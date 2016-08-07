const db = require('../models/db');

//allows a user to be created
exports.add = (payload, err, success) => {
	db.user.create(payload).then(success).catch(err);
}

exports.all = (err, success) => {
	db.user.findAll().then(success).catch(err);
}
//allows a user to be found
exports.one = (payload, err, success) => {
	db.user.find({
		where: {
			id: payload.id,
		},
		include: [{
			all: true,
			nested: true,
		}],
	}).then(success).catch(err);
}

//allows a user to be updated
exports.update = (payload, err, success) => {
	db.user.find({
		where: {
			id: payload.id,
		}
	}).then((existingData) => {
		existingData.updateAttributes(payload).then(success).catch(err);
	}).catch(err);
}

//allows a user to be deleted
exports.remove = (payload, err, success) => {
	db.user.destroy({
		where: {
			id: payload.id,
		}
	}).then(success).catch(err);
}
