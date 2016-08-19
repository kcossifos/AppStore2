const db = require('../models/db');
const util = require('kelTool2');

// allows an app to be created
exports.add = (payload, err, success) => {
  db.app.create(payload).then(success).catch(err);
  util.debug('App has been created ', payload, 200);
};

// allows to find all apps
exports.all = (err, success) => {
  db.app.findAll().then(success).catch(err);
  util.debug('All apps have been found ', 200);
};

// allows to find one app
exports.one = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  util.debug('One app has been found ', payload, 200);
};

// allows an app to be updated
exports.update = (payload, err, success) => {
  db.app.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  util.debug('App has been updated ', payload, 200);
};

// allows an app to be deleted
exports.remove = (payload, err, success) => {
  db.app.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  util.debug('One app has been deleted ', payload, 200);
};
