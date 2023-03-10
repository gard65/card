const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());

app.get('/', async (req, res) => {
  const url = 'https://cors-anywhere.herokuapp.com/https://data.ifiniti.co/ifc/ed348259-5864-440b-a4c5-523657361ede.json';
  const options = {
    url: url,
    headers: {
      'Origin': 'http://localhost:5001/'
    }
  };
  request.get(options, (error, response, body) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error');
    }
    res.send(body);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
