import { gql } from '@apollo/client'

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`

const CURRENT_USER = gql`
    {
        currentUser @client
    }
`

const GET_NOTE = gql`
    query GetNote($id: ID!) {
        note(id: $id) {
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
`

const NOTE_FEED = gql`
    query NoteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
            cursor
            hasNextPage
            notes {
                id
                createdAt
                content
                favoriteCount
                author {
                    id
                    username
                    avatar
                }
            }
        }
    }
`

const MY_NOTES = gql`
    query MyNotes {
        me {
            id
            username
            notes {
                id
                content
                favoriteCount
                createdAt
                author {
                    id
                    username
                    avatar
                }
            }
        }
    }
`

const MY_FAVORITES = gql`
    query MyFavorites {
        me {
            id
            username
            favorites {
                id
                content
                favoriteCount
                createdAt
                author {
                    id
                    username
                    avatar
                }
            }
        }
    }
`

const USER_NOTES = gql`
    query UserNotes($username: String!) {
        user(username: $username) {
            id
            username
            notes {
                id
                content
                favoriteCount
                createdAt
                author {
                    id
                    username
                    avatar
                }
            }
        }
    }
`

const GET_ME = gql`
    query Me {
        me {
            id
            favorites {
                id
            }
        }
    }
`

export {
    IS_LOGGED_IN,
    CURRENT_USER,
    GET_NOTE,
    NOTE_FEED,
    MY_NOTES,
    MY_FAVORITES,
    USER_NOTES,
    GET_ME
}
