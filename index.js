require('dotenv').config();
const axios = require('axios');

const headers = {
  VtexIdclientAutCookie: process.env.VTEX_TOKEN,
  'Content-Type': 'application/json',
  Accept: 'application/vnd.vtex.ds.v10+json',
  'REST-Range': 'resources=0-100',
};

function run() {
  axios({
    method: 'get',
    url: `https://${process.env.VTEX_ACCOUNT}.vtexcommercestable.com.br/api/dataentities/${process.env.VTEX_ACRONYM}/search`,
    headers,
  })
    .then(function (response) {
      const data = response.data;
      if (data.length > 0) {
        data.forEach((element, index) => {
          const id = element.id;

          axios({
            method: 'delete',
            url: `https://${process.env.VTEX_ACCOUNT}.vtexcommercestable.com.br/api/dataentities/${process.env.VTEX_ACRONYM}/documents/${id}`,
            headers,
          })
            .then(function () {
              console.log(`Document ID: ${id} deleted`);
            })
            .catch(function (error) {
              console.error(error);
            });
        });

        run();
      }

      return;
    })
    .catch(function (error) {
      console.error(error);
    });
}

run();
