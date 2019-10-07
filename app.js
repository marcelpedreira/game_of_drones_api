const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
// const path = require('path');

const app = express();
app.use(cors());

// Middlewares moved morgan into if for clear tests
if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/test', function(req, res){
  res.send('Ok');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true 
}));

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

module.exports = app;
