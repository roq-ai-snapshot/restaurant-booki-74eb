// This is ping to notify ROQ that you started local installation, you can remove it
require('dotenv').config();
const axios = require('axios');

/* start postinstall-console-url */
const apiUrl = '';
/* end postinstall-console-url */

axios
  .post(apiUrl, { environmentId: process.env.ROQ_CLIENT_ID })
  .then((response) => {})
  .catch((error) => {});
