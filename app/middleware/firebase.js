const dotenv =  require('dotenv');
const firebase = require('firebase');
const admin = require('firebase-admin');

// SETUP FIREBASE
let serviceAccount = require('../../secrets/izzzlit-secret.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

module.exports = options => {
  return async function firebase(ctx, next) {
    // await next();

    // Add the DB reference to the context
    ctx.db = db;
    
    await next();
  }
}