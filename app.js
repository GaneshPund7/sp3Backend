const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var routes = require('./router/router');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

mongoose.connect('mongodb+srv://ganeshpund0000:H37rsi1YsFng3fhS@db-sp3.wn47nsb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const taskRoutes = require('./router/router');
app.use('/api', taskRoutes);
const { connectToDatabase, getClient } = require('./db');

async function startServer() {
  await connectToDatabase();
 

  const dbClient = getClient();
  
}

startServer();
