import React from 'react'
import styled from 'styled-components'
import { FaEdit } from 'react-icons/fa'
import { useQuery } from '@apollo/client'
import { Link as DefaultLink } from 'react-router-dom'

import Center from '../components/Center'
import DeleteNote from '../components/DeleteNote'
import FavoriteNote from '../components/FavoriteNote'
import { GET_ME } from '../gql/query'

const Link = styled(DefaultLink)`
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    :hover,
    :active {
        color: #004499;
    }
`

const UserNote = ({ note }) => {
    const { data, loading, error } = useQuery(GET_ME)

    if (loading) return <Center>Loading...</Center>
    if (error) return <Center>Error! {error.message}</Center>

    return (
        <>
            <FavoriteNote
                me={data.me}
                noteId={note.id}
                favoriteCount={note.favoriteCount}
            />
            <br />
            {data.me.id === note.author.id && (
                <>
                    <Link to={`/edit/${note.id}`}>
                        <FaEdit /> <em>Edit</em>
                    </Link>
                    <br />
                    <DeleteNote noteId={note.id} />
                </>
            )}
        </>
    )
}

export default UserNote