const expect = require('chai').expect;
const apps = require('../src/models/app');
const util = require('../lib/util');

let testApp = {};

describe('ModelApp', () => {
  before(() => {
    const mockApp = {
      userId: 2,
      title: 'New App',
      description: 'Best apps',
      artAssets: 'www.idk.idk',
      releaseDate: 'August 8th, 2016',
    };
    apps.add(mockApp, (error) => {
      util.debug('Error creating mock app', error);
    }, (newDbApp) => {
      testApp = newDbApp;
    });
  });

  // read all apps
  it('Should be able to read all apps.', (done) => {
    apps.all((error) => {
      util.debug('Error reading all apps', error);
    }, (allApps) => {
      expect(allApps.length).to.be.above(0);
      done();
    });
  });

  // read one app
  it('Should be able to read one app', (done) => {
    apps.one(testApp, (error) => {
      util.debug('Error reading app', error);
    }, (oneApp) => {
      expect(oneApp.id).to.be.equal(testApp.id);
      done();
    });
  });

  // create an app
  it('Should be able to create an app.', () => {
    expect(testApp.id).to.not.be.null;
  });

  // updates an app with updateInfo
  it('Should be able to update an app.', (done) => {
    const updateInfo = {
      userId: testApp.id,
      title: 'New App',
      description: 'Best app ever!!',
      artAssets: 'www.idklink.idk',
      releaseDate: 'August 10th, 2016',
    };
    apps.update(updateInfo, (err) => {
      util.debug('App failed to update', err);
    }, (updatedDbUser) => {
      expect(updatedDbUser.name).to.be.equal(updateInfo.name);
    });
    done();
  });

  // deletes an app
  it('Should be able to delete an app.', (done) => {
    apps.remove(testApp, (err) => {
      util.debug('Unable to delete testapp', err);
    }, (responseFromDestroy) => {
      expect(responseFromDestroy).to.be.equal(1);
      done();
    });
  });
});
