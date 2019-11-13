'use strict';

const Controller = require('egg').Controller;
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const hash = require('object-hash');

class ScrapeController extends Controller {
  // async disco() {
  //   const { ctx } = this;
    
  //   async subscribe() {
  //   // Go to DiscoTech Las Vegas Events Page
  //   const url = 'https://app.discotech.me/las-vegas/events/';
  //   // keep one broswer and reuse
  //   let browserWSEndpoint;

  //   puppeteer
  //     .launch()
  //     .then(browser => {
  //       browserWSEndpoint = browser.wsEndpoint();
  //       return browser.newPage()
  //     })
  //     .then(page => {
  //       return page.goto(url).then(async function() {
  //         // Click a Few Times
          
  //         for (let index = 0; index < 10; index++) {
  //           await page.tap('#show-more');
  //           await page.waitFor(1000);
  //         }

  //         await page.waitFor(2000);
          
  //         // Then return the extended page
  //         return page.content();
  //       });
  //     })
  //     .then(html => {
  //       const $ = cheerio.load(html);
        
  //       const events = [];

  //       $('.gridlist-item').each(function() {
  //         const item =  cheerio.load(this);

  //         const itemHTML = cheerio.load(item.html());

  //         const eventTitle  = itemHTML('.event-box-headline').text().trim().replace(/(\r\n|\n|\r)/gm, "");
  //         const venueName  = itemHTML('.caption > a').text();
  //         const dateTime  = itemHTML('div .caption').text().trim().split("\n")[0];
  //         const eventImage = itemHTML('.image').css('background-image').replace("url(","").replace(")","")
  //         const eventURL = 'https://app.discotech.me' + itemHTML('.event-box-headline > a').attr('href')


  //         // log the: image, date, time, name, venue/host 
  //         // console.log({
  //         //   'event': eventTitle,
  //         //   'venue': venueName,
  //         //   'date': dateTime,
  //         //   'eventURL': eventURL,
  //         //   'eventImage': eventImage,
  //         // })

  //         // generate event hash
  //         const eventHash = hash({
  //           'event': eventTitle,
  //           'venue': venueName,
  //           'date': dateTime,
  //           'eventURL': eventURL,
  //           'eventImage': eventImage,
  //         })

  //         // TODO: test that eventHash's are consistent 
  //         // console.log(eventHash);
          

  //         // add the event to the events array
  //         events.push({
  //           '_id': eventHash,
  //           'event': eventTitle,
  //           'venue': venueName,
  //           'date': dateTime,
  //           'eventURL': eventURL,
  //           'eventImages': [eventImage],
  //         })

          
  //       });

  //       // add events to firebase
  //       const eventsRef = this.ctx.db.collection('events');
  //       // check if hash exists, if not add new event
  //       events.forEach(event => {
  //         const eventRef = await eventsRef.where('_id', '==', event._id)
  //         // .limit(1)
  //         .get()
  //         .then(snapshot => {
  //           if (snapshot.empty) {
  //             await eventsRef.add(event)
  //             // console.log('No matching documents.');
  //             // return;
  //           }  
  //         })
  //         .catch(err => {
  //           console.log('Error getting documents', err);
  //         });
  //       });

  //     })
  //     .catch(console.error);


  // }
  // }
}

module.exports = ScrapeController;
