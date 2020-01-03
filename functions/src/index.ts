import * as functions from 'firebase-functions';
const { app } = require(`${process.cwd()}/dist/server/main.js`);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

export const ssr = functions.https.onRequest(app);
