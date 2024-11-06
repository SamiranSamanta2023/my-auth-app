const sql = require('mssql');

const config = {
  user: 'ServerAdmin',
  password: 'Samanta123@',
  server: 'samiran.database.windows.net',  // replace with your server
  database: 'TestDB',
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

sql.connect(config, (err) => {
  if (err) console.log('Database connection failed: ', err);
  else console.log('Database connected successfully');
});

module.exports = sql;

