const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Nuvemshop } = require('@nuvemshop/shop-client');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const CLIENT_ID = '6564';
const CLIENT_SECRET = '21efa0e3fe02a9bf96193891e90fc25c2134470a763fdbf3';
const NUVEBSHOP_TOKEN = 'ff0cf3ebca7b4cf09a306a3f95a51a8e95890ead';

const nuvemshop = new Nuvemshop({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  accessToken: NUVEBSHOP_TOKEN,
});

app.get(
  'https://candela60.lojavirtualnuvem.com.br/admin/',
  async (req, res) => {
    const message = 'Olá mundo!';
    const shopData = await nuvemshop.shop.get();

    res.send(`Olá, ${shopData.name}! ${message}`);
  }
);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
