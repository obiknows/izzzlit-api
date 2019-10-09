'use strict';

const Controller = require('egg').Controller;

class VenueController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {'venue': 'Drais'};
  }
}

module.exports = VenueController;
