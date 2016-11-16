import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import {renderVM} from './vm';

const app = express();
app.use(bodyParser.json());
app.use(session({
  secret: 'yoba',
  cookie: {httpOnly: false},
  resave: false,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', 0);
  return next();
});

const storage = {};

function getTodos(req) {
  storage[req.sessionID] = storage[req.sessionID] || [];
  return storage[req.sessionID];
}

function setTodos(req, todos) {
  storage[req.sessionID] = todos;
}

app.route('/_api/todo-list-server/todos')
  .get((req, res) => {
    res.send({todos: getTodos(req)});
  })
  .post((req, res) => {
    req.body.id = Math.random().toString();
    setTodos(req, getTodos(req).concat([req.body]));
    res.send(req.body);
  });

app.use('*', (req, res) => {
  res.send(renderVM('./src/index.vm'));
});

export function start(port) {
  app.listen(port || 3000, () => {
    console.log(`Fake server is running on port ${port || 3000}`);
  });
}
