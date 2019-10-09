'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // WELCOME
  router.get('/', controller.home.index);

  // VENUES
  router.get('/venues', controller.venues.index);

  // EVENTS
  router.get('/events', controller.events.index)
  // USERS
  router.get('/users', controller.users.index)
};
