const Sequelize = require('sequelize');

require('dotenv').config();

// connects to database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// sets up user table in database
const user = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
});

// sets up app table in database
const app = sequelize.define('app', {
  userId: {
    type: Sequelize.INTEGER,
  },
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  artAssets: {
    type: Sequelize.STRING,
  },
  releaseDate: {
    type: Sequelize.INTEGER,
  },
});

// relationship between user and app
user.hasMany(app, {
  foreignKey: 'userId',
});


sequelize.sync();
exports.sequelize = sequelize;
exports.user = user;
exports.app = app;
