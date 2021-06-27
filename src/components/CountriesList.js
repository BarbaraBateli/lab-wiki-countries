import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountriesList extends React.Component {
  state = {
    countries: [...countries],
  };
  render() {
    return (
      <div className="container">
        <div className="column">
          {this.state.countries.map((countries) => {
            return (
              <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className="list-group">
                  <Link
                    to={`/countries/${countries.cca3}`}
                    className="btn">
                    {countries.name.common}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
