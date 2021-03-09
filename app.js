const {google} = require('googleapis');

//email target list
let targets = [];
let currentTarget = '';

//define client information from google developer console
const CLIENT_ID = '190904681507-acqntr4utgm2ubj67b1n11qrbmvotns3.apps.googleusercontent.com';
const CLIENT_SECRET ='DI-i1Vdrsq2bykrS9So83tb8';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04k5pZvrRJHqWCgYIARAAGAQSNwF-L9IrWp2xftvG2X7oYrg-fTd3k5-t3e83tNqkyWJxdHvTsI7gx3E_7Qmtf-xJO562tCghLN8';

//using the google object create and populate authentication creds
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});