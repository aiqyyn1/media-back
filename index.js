const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersRouter);
const uri =
  'mongodb+srv://aiqyyn1:aikyn777@user.4k1gzv6.mongodb.net/?retryWrites=true&w=majority&appName=user';
const start = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    app.listen(3001, () => {
      console.log(`Server is running on http://localhost:3001`);
    });
  } catch (e) {
    console.error(e);
  }
};
start();
