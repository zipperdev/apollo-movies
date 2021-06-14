import React from "react";
import { Link } from "react-router-dom";

function Movie({ id }) {
    return (
        <Link to={`/${id}`}>
            {id}
        </Link>
    );
}

export default Movie;