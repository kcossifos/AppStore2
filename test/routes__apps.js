const request = require('request');
const expect = require('chai').expect;
const user = require('../src/models/user');
const util = require('kelTool2');

describe('RouteApp', () => {
  const mockUser1 = {
    name: 'Kels',
    age: 24,
  };

  let userId;

  before(() => {
    // creates the mock User for this test
    user.add(mockUser1, (error) => {
      util.debug('Error creating user', error);
    }, (newDbUser) => {
      userId = newDbUser.id;
    });
  });

  const mockApp1 = {
    userId,
    title: 'New App',
    description: 'Best apps',
    artAssets: 'www.idk.idk',
    releaseDate: 'August 8th, 2016',
  };

  const mockApp2 = {
    userId,
    title: 'New App',
    description: 'Best apps',
    artAssets: 'www.idk.idk.cu',
    releaseDate: 'August 8th, 2016',
  };

  const host = 'http://localhost:3000';
  let id1;

  // post to be able to add one app
  // Json stringify is returning our json results in the terminal
  it('Should be able to add one app ' + JSON.stringify(mockApp1), (done) => {
    const options = {
      method: 'post',
      body: mockApp1,
      json: true,
      url: host + '/api/v1/apps',
    };
    request.post(options, (err, res) => {
      util.debug('Error adding one app', err);
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  // get all apps
  it('Should be able to get all apps', (done) => {
    const options = {
      method: 'get',
      url: host + '/api/v1/apps',
    };
    request.get(options, (err, res, data) => {
      util.debug('Error getting all apps', err);
      /* eslint-disable */
      data = JSON.parse(data);
      /* eslint-enable */
      let found = false;
      for (let t = 0; t < data.length; t++) {
        if (data[t].title === mockApp1.title) {
          found = true;
          id1 = data[t].id;
        }
      }
      expect(found).to.be.equal(true);
      done();
    });
  });

  // get app by id
  it('Should get app by id', (done) => {
    const options = {
      method: 'get',
      url: host + '/api/v1/apps/' + id1,
    };
    request.get(options, (err, res, data) => {
      util.debug('Error getting app by id', err);
      /* eslint-disable */
      data = JSON.parse(data);
      /* eslint-enable */
      let found = false;
      found = data.id === id1;
      expect(found).to.be.equal(true);
      done();
    });
  });

  // update an app
  it('Should be able to update app ' + JSON.stringify(mockApp1), (done) => {
    const options = {
      method: 'post',
      body: mockApp2,
      json: true,
      url: host + '/api/v1/apps/' + id1,
    };
    request.post(options, (err, res) => {
      util.debug('Error updating app', err);
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  // delete an app by id
  it('Should delete app by id', (done) => {
    const options = {
      method: 'delete',
      url: host + '/api/v1/apps/' + id1,
    };
    request.delete(options, (err, res) => {
      util.debug('Error deleting app', err);
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
});
