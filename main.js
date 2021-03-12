//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);


const fs = require('fs');
//const readline = require('readline');
const {google} = require('googleapis');

//const cid = document.getElementById("cid").value;
//const tmin = document.getElementById("tmin").value;

var eventLA = [];
var eventIA = [];

const CLIENT_ID = '190904681507-acqntr4utgm2ubj67b1n11qrbmvotns3.apps.googleusercontent.com';
const CLIENT_SECRET ='DI-i1Vdrsq2bykrS9So83tb8';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const API_KEY = 'AIzaSyDiZcDeclHiR8C5LqnZkc6CB5iPCwKAthI';
const REFRESH_TOKEN = '1//04k5pZvrRJHqWCgYIARAAGAQSNwF-L9IrWp2xftvG2X7oYrg-fTd3k5-t3e83tNqkyWJxdHvTsI7gx3E_7Qmtf-xJO562tCghLN8';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});


function listEvents(auth) {
  const accessToken = oAuth2Client.getAccessToken();
  const Calendar = google.calendar({version: 'v3', auth});
  Calendar.events.list({
    calendarId: 'vtisdel192@west-mec.org',
    timeMin: '2019-05-01T09:00:00-07:00',
    //maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken,
    key: API_KEY
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const events = res.data.items;
    if (events.length) {
      console.log('Upcoming 10 events:');
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`);
        let detail= {
          name: event.summary,
          stime: event.start.dateTime,
          etime: event.start.date
        }

        let data = JSON.stringify(detail, null, 2);
        if (i != events.length - 1)
        {
          eventLA += data+'\,\n';
        }
        else if (i = 1)
        {
          eventLA += '\n'+data+'\n';
        }
        else 
        {
          eventLA += data+'\n';
        }
        

        console.log('This is after the write call');
      });
    } else {
      console.log('No upcoming events found.');
    }
    fs.writeFileSync('try.json','['+eventLA+']' );
  });
}
//listEvents(oAuth2Client);
var eventBV = {
'summary': 'Google I/O 2019',
'location': '800 Howard St., San Francisco, CA 94103',
'description': 'A chance to hear more about Googles developer products.',
'start': {
  'dateTime': '2021-05-28T09:00:00-07:00',
  'timeZone': 'America/Los_Angeles',
},
'end': {
  'dateTime': '2021-05-28T17:00:00-07:00',
  'timeZone': 'America/Los_Angeles',
},
'attendees': [
  {'email': 'lpage@example.com'},
  {'email': 'sbrin@example.com'},
],
'reminders': {
  'useDefault': false,
  'overrides': [
    {'method': 'email', 'minutes': 24 * 60},
    {'method': 'popup', 'minutes': 10},
  ],
}
};


  //This is a standard format for creating calendar events.
  let eventT = {
      'summary': 'code wont work',
      'description': 'wont work',
      'start': {
          'dateTime': '2021-05-28T09:00:00-07:00',     // Format: '2015-05-28T09:00:00-07:00'
          'timeZone': 'Asia/Calcutta',
      },
      'end': {
          'dateTime': '2021-05-28T09:00:00-07:00',
          'timeZone': 'Asia/Calcutta',
      }
      
  };


function makeEvents(oAuth2Client) {
  const accessToken = oAuth2Client.getAccessToken();
  const Calendar1 = google.calendar({version: 'v3', oAuth2Client});
  Calendar1.events.insert({
    
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken,
    key: API_KEY,
    
   auth: oAuth2Client,
   calendarId: 'vtisdel192@west-mec.org',
   resource: eventT,
  }, function(err, event) {
    if (err) {
        console.log('There was an error contacting the Calendar service: ' + err);
        return;
    }
    console.log('Event created: %s', event.data.htmlLink);
});
}
  makeEvents(oAuth2Client);
