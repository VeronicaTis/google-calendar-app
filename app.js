const {google} = require('googleapis');
const calendar = google.calendar('v3');


//define client information from google developer console
const CLIENT_ID = '190904681507-acqntr4utgm2ubj67b1n11qrbmvotns3.apps.googleusercontent.com';
const CLIENT_SECRET ='DI-i1Vdrsq2bykrS9So83tb8';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const API_KEY = 'AIzaSyDiZcDeclHiR8C5LqnZkc6CB5iPCwKAthI';
const REFRESH_TOKEN = '1//04k5pZvrRJHqWCgYIARAAGAQSNwF-L9IrWp2xftvG2X7oYrg-fTd3k5-t3e83tNqkyWJxdHvTsI7gx3E_7Qmtf-xJO562tCghLN8';

//using the google object create and populate authentication creds



async function main() {
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, API_KEY);
    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN},{api_key: API_KEY});
       
       /* Acquire an auth client, and bind it to all future calls
       const authClient = await auth.getClient();
       google.options({auth: authClient});*/
    
       // Do the magic
       const sampleEvent = {'summary': 'Google I/O 2015',
       'location': '800 Howard St., San Francisco, CA 94103',
       'description': 'A chance to hear more about Google\'s developer products.',
       'start': {
         'dateTime': '2019-05-28T09:00:00-07:00',
         'timeZone': 'America/Los_Angeles'
       },
       'end': {
         'dateTime': '2021-05-28T17:00:00-07:00',
         'timeZone': 'America/Los_Angeles'
       },
       'recurrence': [
         'RRULE:FREQ=DAILY;COUNT=2'
       ],
       'attendees': [
         {'email': 'lpage@example.com'},
         {'email': 'sbrin@example.com'}
       ],
       'reminders': {
         'useDefault': false,
         'overrides': [
           {'method': 'email', 'minutes': 24 * 60},
           {'method': 'popup', 'minutes': 10}
         ]
       }
    };
       const res = await calendar.events.list(
           {
            type:'oAuth2',   
            clientId: CLIENT_ID,
            calendarId: 'vtisdel192@west-mec.org',
            key:API_KEY,
            },
           (err,res)=>{
            if(err) return console.log("API ERROR:" +err);
            const events = res.data.items;
            if(events.length){
                if(events.length==1){ 
                    console.log('Next Event:');
                    events.map((evnt, i) =>{
                        const start =event.start.dateTime || event.start.date;
                        console.log(`${start} - ${event.summary}`);
                    });
                }
            }
            else{
                console.log("No New Events")
            }
       
       });}
       //catch(error){return error;}
       console.log(res.data);
    
       // Example response
       // {
       //   &quot;accessRole&quot;: &quot;my_accessRole&quot;,
       //   &quot;defaultReminders&quot;: [],
       //   &quot;description&quot;: &quot;my_description&quot;,
       //   &quot;etag&quot;: &quot;my_etag&quot;,
       //   &quot;items&quot;: [],
       //   &quot;kind&quot;: &quot;my_kind&quot;,
       //   &quot;nextPageToken&quot;: &quot;my_nextPageToken&quot;,
       //   &quot;nextSyncToken&quot;: &quot;my_nextSyncToken&quot;,
       //   &quot;summary&quot;: &quot;my_summary&quot;,
       //   &quot;timeZone&quot;: &quot;my_timeZone&quot;,
       //   &quot;updated&quot;: &quot;my_updated&quot;
       // }
     
    
     main().catch(e => {
       console.error(e);
       throw e;
     });