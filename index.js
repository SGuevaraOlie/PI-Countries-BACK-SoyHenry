const server = require("./src/server");
const {conn} = require('./src/db.js');
// const syncApiDb = require('./src/controllers/APItoDB/syncApiDb');
require('dotenv').config();

conn
  .sync(false)
  .then(async () => {
    // await syncApiDb();
    server.listen(process.env.PORT, () => {
      console.log('Server listening on port', process.env.PORT);
    })
  })
  .catch(error => console.error(error))
