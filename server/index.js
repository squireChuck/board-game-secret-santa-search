const Koa = require('koa');
const helmet = require('koa-helmet');
const serve = require('koa-static');
const path = require('path');

const app = new Koa();

app.use(helmet());

app.use(serve(path.join(__dirname, '/dist')));

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on localhost:${port}`)
});