import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    margin: 26px;
    border: 4px solid #ffffff;
    width: 152px;
    height: 228px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.22);
    overflow: hidden;
    border-radius: 16px;
`;

const Poster = styled.div`
    background-image: url(${props => props.bg});
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`;

function Movie ({ id, bg }) {
    return (
        <Container>
            <Link to={`/${id}`}>
                <Poster bg={bg} />
            </Link>
        </Container>
    );
};

export default Movie;