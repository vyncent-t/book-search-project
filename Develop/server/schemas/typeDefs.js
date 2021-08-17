const { gql } = require('apollo-server-express')

const typeDef = gql`
    typer User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }



`