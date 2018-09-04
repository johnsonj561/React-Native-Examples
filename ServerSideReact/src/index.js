import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  // logic to init store / load data

  const html = renderer(req, store);
  res.send(html);
});

app.listen(3000, () => {
  console.log('listening on 3000!');
});
