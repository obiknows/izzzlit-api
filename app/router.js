'use strict';

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
