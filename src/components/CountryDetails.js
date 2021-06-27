import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends React.Component {
  state = {
    name:"",
    capital:"",
    area: 0,
    bordes:"",
  };
  searchCountry = () => {
    if (!this.state.name) {
      const foundCountry = countries.find((country) => {
        return country.id === this.props.match.params.homepage;
      });
    }
  }
  return;
}
export default CountryDetails;
