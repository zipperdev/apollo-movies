import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIE = gql`
    query getMovie($id: Int!) {
        movie(id: $id) {
            title
            medium_cover_image
            language
            rating
            description_intro
        }
        suggestions(id: $id) {
            id
            medium_cover_image
        }
    }
`;

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

const Column = styled.div`
    margin-left: 10px;
`;

const Title = styled.h1`
    font-size: 50px;
    font-weight: 400;
    margin-bottom: 10px;
`;

const Subtitle = styled.h4`
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 20px;
    font-weight: 300;
    width: 700px;
    letter-spacing: 0.05rem;
    line-height: 1.4rem;
`;

const Poster = styled.div`
    width: 267px;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    background-image: url(${props => props.bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: transparent;
`;

const Movies = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 14px 0;
`;

function Detail () {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {
            id: parseInt(id)
        }
    });
    return (
        <>
            <Container>
                <Column>
                    {loading && <Title>Loading...</Title>}
                    {!loading && data.movie && (
                        <>
                            <Title>{data.movie.title}</Title>
                            <Subtitle>{data.movie.language ? data.movie.language : "Unknown"} · {data.movie.rating}</Subtitle>
                            <Description>{data.movie.description_intro}</Description>
                        </>
                    )}
                </Column>
                <Poster bg={!loading && data && data.movie ? data.movie.medium_cover_image : ""}></Poster>
            </Container>
            {!loading && data.movie && (
                <Movies>
                    {data && data.suggestions && data.suggestions.map(s => (
                        <Movie key={s.id} id={s.id} bg={s.medium_cover_image} />
                    ))}
                </Movies>
            )}
        </>
    );
};

export default Detail;