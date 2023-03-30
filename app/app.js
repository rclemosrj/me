const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Nuvemshop } = require('@nuvemshop/shop-client');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const CLIENT_ID = 'seu_client_id';
const CLIENT_SECRET = 'seu_client_secret';
const NUVEBSHOP_TOKEN = 'seu_token_nuvemshop';

const nuvemshop = new Nuvemshop({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  accessToken: NUVEBSHOP_TOKEN,
});

app.get('/admin', async (req, res) => {
  const message = 'Olá mundo!';
  const shopData = await nuvemshop.shop.get();

  res.send(`Olá, ${shopData.name}! ${message}`);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
