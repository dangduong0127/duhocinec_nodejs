import React, { useEffect, useState } from "react";
import "./styles.scss";
import { getAllCountries } from "../../utils/api";
import { Link } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import IntroduceContries from "../../components/IntroduceCountries";

const Countries = () => {
  return (
    <>
      <IntroduceContries />
    </>
  );
};

export default Countries;
