'use strict';

let FieldValue = require('firebase-admin').firestore.FieldValue;

const Controller = require('egg').Controller;

class RsvpController extends Controller {
  // GET /rsvp
  async index() {
    const { ctx } = this;

    // Get DB ref
    var rsvps = [];
    const rsvpsRef = ctx.db.collection('rsvps');

    // Query for all RSVPs
    const queryRef = await rsvpsRef
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }  

        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          rsvps.push(doc.data())
        });

      })
      .catch(err => {
        console.log('Error getting RSVPs', err);
      });

    ctx.body = {'rsvps': rsvps}
  }

  // (GET /rsvp/create)
  async create() {
    const { ctx } = this;
    const query = this.ctx.query;

    // Get the full range of query params
    // ...assuming validation on the frontend
    const eventType = query.type;
    const women = query.women;
    const men = query.men;
    const date = query.date;
    const place = query.place;
    const name = query.name;
    const phone = query.phone;


    // extract data from post request
    const formdata = {
      type: eventType,
      name: name,
      men: men,
      women: women,
      when: date,
      where: place,
      phone: phone,
      dateCreated: Date.now()
    }

    console.log();
    console.log('FORM DATA');
    console.log();
    console.log(formdata);
    console.log();
    

    let REF;
    // Create a new document in collection "rsvp" with autogen ID 
    const addRef = await ctx.db
      .collection('rsvps').add(formdata)
      .then(ref => {
        REF = ref
        console.log('Added RSVP with ID: ', ref.id);
      });

    // set one response header
    // ctx.set('Access-Control-Allow-Origin', '*');

    ctx.body = {
      'id': REF.id,
      'rsvp': `Created RSVP with ID: ${REF.id}`
    }
  }

  // // GET /rsvp/:rsvp-id
  // async show() {}
  
  // // PUT /rsvp/:rsvp-id
  // async update() {}
  
  // // DEL /rsvp/:rsvp-id
  // async destroy() {}
}

module.exports = RsvpController;
