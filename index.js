// const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
// const { SubscriptionServer } = require('subscriptions-transport-ws');
const dotenv = require('dotenv');
const app = require('./app');
// const schema = require('./schema');
const mongoose = require('mongoose');

dotenv.config();
const port = process.env.PORT || process.env.SERVER_PORT;

mongoose.connect(process.env.DATABASE_URL, (err, res) => {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  const ws = createServer(app);
  ws.listen(port, () => {
    console.log(`Server listening at ${port}`);
  });
});

// // We wrap the express server so that we can attach the WebSocket for subscriptions
// const ws = createServer(app);
// // Start the server
// const port = process.env.PORT || process.env.SERVER_PORT;
// ws.listen(port, () => {
//     console.log(`Server listening at ${port}`);

//     // Set up the WebSocket for handling GraphQL subscriptions
//     new SubscriptionServer({
//         execute,
//         subscribe,
//         schema
//     }, {
//         server: ws,
//         path: '/subscriptions',
//     });
// });
