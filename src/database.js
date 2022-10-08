const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/MiniMarket'

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.Connection;

mongoose.connection.once('open', function () {
    console.log('MongoDB running');
  })
mongoose.connection.on('error', function (err) {
    console.log(err);
  });