const request = require('request');
const expect = require('chai').expect;
const util = require('../lib/util');


describe('RouteUsers', () => {
  const mockUser1 = {
    name: 'Kels',
    age: 24,
  };

  const mockUser2 = {
    name: 'Jack',
    age: 28,
  };
  const host = 'http://localhost:3000';
  let id1;

  it('Should be able to add user ' + JSON.stringify(mockUser1), (done) => {
    const options = {
      method: 'post',
      body: mockUser1,
      json: true,
      url: host + '/api/v1/users',
    };
    request.post(options, (err, res) => {
      util.debug('Error adding a user', err);
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Should be able to add user ' + JSON.stringify(mockUser2), (done) => {
    const options = {
      method: 'post',
      body: mockUser2,
      json: true,
      url: host + '/api/v1/users',
    };
    request.post(options, (err, res) => {
      util.debug('Error adding  a user', err);
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });


  it('Should be able to get all user', (done) => {
    const options = {
      method: 'get',
      url: host + '/api/v1/users',
    };
    request.get(options, (err, res, data) => {
      util.debug('Error getting all users', err);
      /* eslint-disable */
      data = JSON.parse(data);
      /* eslint-enable */
      let found = false;
      for (let t = 0; t < data.length; t++) {
        if (data[t].name === mockUser1.name) {
          found = true;
          id1 = data[t].id;
        }
      }
      expect(found).to.be.equal(true);
      done();
    });
  });


  it('Should get user by id', (done) => {
    const options = {
      method: 'get',
      url: host + '/api/v1/users/' + id1,
    };
    request.get(options, (err, res, data) => {
      util.debug('Error getting user by id', err);
      /* eslint-disable */
      data = JSON.parse(data);
      /* eslint-enable */
      let found = false;
      found = data.name === mockUser1.name;
      expect(found).to.be.equal(true);
      done();
    });
  });

  it('Should be able to update user ' + JSON.stringify(mockUser1), (done) => {
    const options = {
      method: 'post',
      body: mockUser2,
      json: true,
      url: host + '/api/v1/users/' + id1,
    };
    request.post(options, (err, res) => {
      util.debug('Error updating a user', err);
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  it('Should delete user by id', (done) => {
    const options = {
      method: 'delete',
      url: host + '/api/v1/users/' + id1,
    };
    request.delete(options, (err, res) => {
      util.debug('Error deleting a user', err);
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
});
