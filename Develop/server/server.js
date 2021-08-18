const { typeDefs, resolvers } = require('./schemas');
const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const path = require('path');
const { authMiddleware } = require('./utils/auth')
const db = require('./config/connection');
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})

const serverMake = function async() {
  {
    await server.start()
    server.applyMiddleware({ app })
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/build')));
    }


    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'))
    })


    db.once('open', () => {
      app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
    });

  }
}

serverMake();