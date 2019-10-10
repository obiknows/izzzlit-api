'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {'data': 'Welcome to the Izzzlit API'};
  }
}

module.exports = HomeController;
