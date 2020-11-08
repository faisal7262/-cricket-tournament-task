const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// database section
const dbconn = process.env.DB_Connection;
mongoose.connect(dbconn,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Database connection established successfully");
});

const TournamentRouter = require('./routes/tournament');

const TeamRouter = require('./routes/teams');

app.use('/tournament',TournamentRouter);
app.use('/teams',TeamRouter);


app.listen(port, () => {
  console.log(`server is running on port || ${port}`);
});
