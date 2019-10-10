'use strict';

const Controller = require('egg').Controller;


class UserController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   ctx.body = {'user': 'o13nna'};
  // }
  async index() {
    const { ctx } = this;
    
    // Get DB ref
    var user;
    const usersRef = ctx.db.collection('users');

    // Query based on user email
    const queryRef = usersRef.where('email', '==', 'obiknows88@gmail.com').limit(1).get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }  

        snapshot.forEach(doc => {
          // console.log(doc.id, '=>', doc.data());
          user = doc.data()
        });

        // console.log(user);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

    console.log(user);
    ctx.body = {'user': user}
    
  }
}

module.exports = UserController;
