'use strict';

const Controller = require('egg').Controller;

class EventController extends Controller {
  async index() {
    const { ctx } = this;
    // // ctx.body = {'event': 'Drais News Years Party'};

    // // Get DB ref
    var events = [];
    // const eventsRef = ctx.db.collection('events');

    // // Create a new document in collection "rsvp" with autogen ID 
    // const addRef = await ctx.db
    //   .collection('rsvps').doc(event._id).set(formdata)
    //   .then(ref => {
    //     REF = ref
    //     console.log('Added RSVP with ID: ', ref.id);
    //   });

    // // set one response header

    // // ctx.body = {'user': user[0]}
    ctx.body = {'events': events}
  }
}

module.exports = EventController;
