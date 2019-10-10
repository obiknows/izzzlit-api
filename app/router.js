'use strict';

const dotenv =  require('dotenv');
const firebase = require('firebase');

dotenv.config();
const firebaseConfig = {
  apiKey: process.env.API_KEY, 
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

var appFirebase = firebase.initializeApp({firebaseConfig});

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // WELCOME / AUTH
  router.get('/', controller.home.index);

  // VENUES
  router.get('/venues', controller.venues.index);
  // router.get('/venues/:venue-id', controller.venues.show);
  // router.post('/venues', controller.venues.index.create);
  // router.put('/venues/:venue-id', controller.venues.update);
  // router.del('/venues/:venue-id', controller.venues.destroy);

  // EVENTS
  router.get('/events', controller.events.index)
  // router.get('/events/:event-id', controller.events.show);
  // router.post('/events', controller.events.index.create);
  // router.put('/events/:event-id', controller.events.update);
  // router.del('/events/:event-id', controller.events.destroy);
  
  // USERS
  router.get('/users', controller.users.index)
  // router.get('/users/:user-id', controller.users.show);
  // router.post('/users', controller.users.index.create);
  // router.put('/users/:user-id', controller.users.update);
  // router.del('/users/:user-id', controller.events.destroy);
};
