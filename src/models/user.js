const db = require('../models/db');
const util = require('kelTool2');

// allows a user to be created
exports.add = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
  util.log('A user has been created ', payload, 200);
};

exports.all = (err, success) => {
  db.user.findAll().then(success).catch(err);
  util.log('All users have been found ');
};

// allows a user to be found
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
  util.log('One User has been found ', payload, 200);
};

// allows a user to be updated
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.log('One user has been updated ', payload, 200);
};

// allows a user to be deleted
exports.remove = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.log('One user has been deleted ', payload, 200);
};
