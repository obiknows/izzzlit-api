const Subscription = require('egg').Subscription;
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const hash = require('object-hash');
const dotenv =  require('dotenv');
const firebase = require('firebase');
const admin = require('firebase-admin');

// SETUP FIREBASE
let serviceAccount = require('../../secrets/izzzlit-secret.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

class ScrapeDiscotech extends Subscription {
  // using `schedule` property to set the scheduled task execution interval and other configurations
  static get schedule() {
    return {
      interval: 604800000, // 1 week interval
      type: 'all', // specify all `workers` need to execute
    };
  }

  // `subscribe` is the function to be executed when the scheduled task is triggered
  async subscribe() {
  // async task(ctx) {
    // Go to DiscoTech Las Vegas Events Page
    const url = 'https://app.discotech.me/las-vegas/events/';
    // keep one broswer and reuse
    let browserWSEndpoint;

    const events = [];
    puppeteer
      .launch()
      .then(browser => {
        browserWSEndpoint = browser.wsEndpoint();
        return browser.newPage()
      })
      .then(page => {
        return page.goto(url).then(async function() {
          // Click a Few Times
          
          for (let index = 0; index < 2; index++) {
            await page.tap('#show-more');
            await page.waitFor(1000);
          }

          await page.waitFor(2000);
          
          // Then return the extended page
          return page.content();
        });
      })
      .then(html => {
        const $ = cheerio.load(html);
        
        // const events = [];

        $('.gridlist-item').each(function() {
          const item =  cheerio.load(this);

          const itemHTML = cheerio.load(item.html());

          const eventTitle  = itemHTML('.event-box-headline').text().trim().replace(/(\r\n|\n|\r)/gm, "");
          const venueName  = itemHTML('.caption > a').text();
          const dateTime  = itemHTML('div .caption').text().trim().split("\n")[0];
          const eventImage = itemHTML('.image').css('background-image').replace("url(","").replace(")","")
          const eventURL = 'https://app.discotech.me' + itemHTML('.event-box-headline > a').attr('href')


          // log the: image, date, time, name, venue/host 
          // console.log({
          //   'event': eventTitle,
          //   'venue': venueName,
          //   'date': dateTime,
          //   'eventURL': eventURL,
          //   'eventImage': eventImage,
          // })

          // generate event hash
          const eventHash = hash({
            'event': eventTitle,
            'venue': venueName,
            'date': dateTime,
            'eventURL': eventURL,
            'eventImage': eventImage,
          })

          // TODO: test that eventHash's are consistent 
          // console.log(eventHash);
          

          // add the event to the events array
          events.push({
            '_id': eventHash,
            'event': eventTitle,
            'venue': venueName,
            'date': dateTime,
            'eventURL': eventURL,
            'eventImages': [eventImage],
          })

          
        });
        
        console.log('scrape: created all the events');

        // add events to firebase
        // check if hash exists, if not add new event
        events.forEach(event => {
          console.log('scrape: adding in the events loop');
          
          // Add a new document in collection "cities"
          db.collection("events").doc(event._id).set(event)
          .then(function() {
              console.log("Document successfully written!");
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });

          // var eventRef = this.ctx.db.collection('events').where('_id', '==', event._id)
          // .get()
          // .then(snapshot => {
          //   if (snapshot.empty) {
          //     eventsRef.add(event)
          //     // console.log('No matching documents.');
          //     // return;
          //   }  
          // })
          // .catch(err => {
          //   console.log('Error getting documents', err);
          // });
        });

      })
      .catch(console.error);


  }
}





module.exports = ScrapeDiscotech;