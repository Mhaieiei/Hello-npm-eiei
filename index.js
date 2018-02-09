const moment = require('moment');

module.exports = name => `Hello ${name} at ${moment().format('MM/DD/YYYY HH:MM:ss')}`