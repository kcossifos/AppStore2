exports.debug = (method, obj, status) => {
  const colors = require('colors');
  const dateFormat = require('dateFormat');
  const fs = require('fs');
  const format = require('format');

  const space = '\n--------------\n';

  //formats the time to day, month, date, year, hours, minutes, seconds, and am or pm
  const date = dateFormat("dddd, mmmm dS, yyyy, h:MM:ss TT");

// sets the colors for these variables
colors.setTheme({
     dates: 'magenta',
     methods: 'green',
     forms: 'cyan',
   });

  //assigns variables to specific colors and formats it
  const info = date.dates + ' ' + method.methods + ' '
  + (format.format('%d', obj)).forms + ' ' + colors.red.underline(status) + space;

// Node_ENV = true this if statement will run
  if (process.env.NODE_ENV) {
    // fs.writeFile Asynchronously writes data to the log file
    // with the option of allowing integers and strings
    fs.writeFile('logs/log.log', info, {mode: 0o666, flag: 'w' }, (err) => {
      if (err) throw err;
      console.log(info);
    });
  }
};