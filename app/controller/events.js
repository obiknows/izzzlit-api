'use strict';

const Controller = require('egg').Controller;

class EventController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {'event': 'Drais News Years Party'};
  }
}

module.exports = EventController;
