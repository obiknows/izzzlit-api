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

    // dotenv.config();
    // const firebaseConfig = {
    //   apiKey: process.env.API_KEY, 
    //   authDomain: process.env.AUTH_DOMAIN,
    //   databaseURL: process.env.DATABASE_URL,
    //   projectId: process.env.PROJECT_ID,
    //   storageBucket: process.env.STORAGE_BUCKET,
    //   messagingSenderId: process.env.MESSAGING_SENDER_ID,
    //   appId: process.env.APP_ID
    // };

    // var appFirebase = firebase.initializeApp(firebaseConfig);

    // // 
    // var db = appFirebase.firestore();

    
  }
}