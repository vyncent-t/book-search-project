const { gql } = require('apollo-server-express')

const typeDef = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]!
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input BookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput ): User
        deleteBook(bookId: ID!): User
    }
`

module.exports = typeDef