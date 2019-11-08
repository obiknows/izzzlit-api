'use strict';

const Controller = require('egg').Controller;


class VenueController extends Controller {
  // (GET /venues)
    // Gets the list of venues from Firebase
  async index() {
    const { ctx } = this;
    ctx.body = {'venue': 'Drais'};
  }

  // (GET /venues/:venue-id)
  async show() {
    const { ctx } = this;
    ctx.body = {'venue': 'Drais'};
  }
  // (POST /venues)
  async create() {
    const { ctx } = this;
    ctx.body = {'venue': 'Drais'};
  }
  // (PUT /venues/:venue-id)
  // async update() {
  //   const { ctx } = this;
  //   ctx.body = {'venue': 'Drais'};
  // }
  // (DELETE /venues/:venue-id)
  // async destroy() {
  //   const { ctx } = this;
  //   ctx.body = {'venue': 'Drais'};
  // }
}

module.exports = VenueController;
