import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            id
            title
            medium_cover_image
            description_intro
        }
    }
`;

function Detail() {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {
            id: parseInt(id)
        }
    });
    return (
        <>
            {loading && <h1>Loading...</h1>}
            {!loading && (
                <>
                    <h1>{data.movie.title}</h1>
                    <img src={data.movie.medium_cover_image} alt={data.movie.title} />
                </>
            )}
        </>
    );
}

export default Detail;