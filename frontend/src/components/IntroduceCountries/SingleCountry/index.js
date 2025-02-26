import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const SingleCountry = ({ data }) => {
  return (
    <>
      <Link to={`/countries${data.slug}`} state={data.id}>
        <img
          style={{
            width: "300px",
            height: "170px",
          }}
          src={`http://localhost:1988/${data.thumbnail}`}
          alt={data.title}
        />
        <h3 className="country-name">{data.title}</h3>
      </Link>
    </>
  );
};

export default SingleCountry;
