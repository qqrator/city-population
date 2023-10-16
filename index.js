const app = require('./app/app');
const fs = require('fs');
const rawdata = fs.readFileSync('environment.json');
const config = JSON.parse(rawdata);
const port = config.app_port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
