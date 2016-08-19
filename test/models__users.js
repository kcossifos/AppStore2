const expect = require('chai').expect;
const user = require('../src/models/user');
const util = require('kelTool2');

let testUser = {};

describe('ModelUser', () => {
  before(() => {
    const mockUser = {
      name: 'Kels',
      age: 24,
    };
    user.add(mockUser, (error) => {
      util.debug('Error creating mock user', error);
    }, (newDbUser) => {
      testUser = newDbUser;
    });
  });

  // read all users
  it('Should be able to read all users.', (done) => {
    user.all((error) => {
      util.debug('Error reading all users', error);
    }, (allUsers) => {
      expect(allUsers.length).to.be.above(0);
      done();
    });
  });

  // read one user
  it('Should be able to read one user', (done) => {
    user.one(testUser, (error) => {
      util.debug('Error reading user', error);
    }, (oneUser) => {
      expect(oneUser.id).to.be.equal(testUser.id);
      done();
    });
  });

  // create a user
  it('Should be able to create a user.', () => {
    expect(testUser.id).to.not.be.null;
  });

  // update the user with updateInfo
  it('Should be able to update.', (done) => {
    const updateInfo = {
      id: testUser.id,
      name: 'Chels',
      age: 22,
    };
    user.update(updateInfo, (err) => {
      util.debug('User failed to update user', err);
    }, (updatedDbUser) => {
      expect(updatedDbUser.name).to.be.equal(updateInfo.name);
      done();
    });
  });

  // deletes a user
  it('Should be able to delete user.', (done) => {
    user.remove(testUser, (err) => {
      util.debug('Unable to delete user', err);
    }, (responseFromDestroy) => {
      expect(responseFromDestroy).to.be.equal(1);
      done();
    });
  });
});
