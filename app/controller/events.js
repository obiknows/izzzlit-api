'use strict';

const Controller = require('egg').Controller;

class EventController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = {'event': 'Drais News Years Party'};

    // Get DB ref
    var events = [];
    const eventsRef = ctx.db.collection('events');

    // Query based on user email
    const queryRef = await eventsRef
      // .where('email', '==', 'obiknows88@gmail.com')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }  

        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          events.push(doc.data())
        });

      })
      .catch(err => {
        console.log('Error getting events', err);
      });

    // ctx.body = {'user': user[0]}
    ctx.body = {'events': events}
  }
}

module.exports = EventController;
