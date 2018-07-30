const mongoose = require('mongoose');

const topAttraction = mongoose.model('topAttraction', require('./attraction-schema'));

module.exports = topAttraction; 
