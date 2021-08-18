import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
        token
        user
         {
             _id
             username
             email
             bookCount
             savedBooks{
                bookId
                authors
                description
                title
                image
                link
             }
         }
    }
}`

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
        token
        user
         {
             _id
             username
             email
             bookCount
             savedBooks{
                bookId
                authors
                description
                title
                image
                link
             }
         }
    }
}`

export const DELETE_BOOK = gql`
mutation deleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
             _id
             username
             email
             bookCount
             savedBooks {
                bookId
                authors
                description
                title
                image
                link
                }
}
}`

export const SAVE_BOOK = gql`
mutation saveBook($bookId: String!) {
    saveBook(bookId: $bookId) {
             _id
             username
             email
             bookCount
             savedBooks {
                bookId
                authors
                description
                title
                image
                link
                }
}
}`