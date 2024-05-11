const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://aiqyyn1:aikyn777@user.4k1gzv6.mongodb.net/?retryWrites=true&w=majority&appName=user', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(3001, () => console.log('Server Started'));
