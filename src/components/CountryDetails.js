import {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends Component {
  state = {
    name:"",
    capital:"",
    area: 0,
    bordes:[],
  };

  componentDidMount = () => {
    this.searchCountry();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.cca3 !== prevProps.match.params.cca3) {
      this.searchCountry();
    }
  };

  searchCountry = () => {
    if (!this.state.name) {
    const foundCountry = countries.find((country) => country.cca3 === this.props.match.params.cca3
    );
    if (foundCountry) {
      this.setState({
        name: foundCountry.name.common,
          capital: foundCountry.capital.join(', '),
          area: foundCountry.area,
          borders: [...foundCountry.borders],
        });
      }
    }
  };

  getBorderCommonName = (cca3) => {
    const country = countries.find((country) => country.cca3 === cca3);

    if (country) {
      return country.name.common;
    }

    return'';
  };

  render () {
    this.searchCountry();
    return (
      <Fragment>
      <h1>{this.state.country.name}
      </h1>
      <table className="table"> 
      <thead></thead>
      <tbody>
      <tr>
      <td style={{ width: "30%"}}>Capital</td>
      <td>{this.state.capital}</td>
      </tr>
      <tr>
      <td>Area</td>
      <td>{this.state.area}km<sup>2</sup>
      </td>
      </tr>
      <tr>
      <td>Borders</td>
      <td>
      <ul>
      {}this.state.borders.map((border) => {
        return (
          <li>
          <Link to={`/${border.cca3}`}>
          {border.name.common}</Link>
          </li>
        );
      })}
      </ul>
      </td>
      </tr>
      </tbody>
      </table>
      </Fragment>
    );
  }
}
 
export default CountryDetails;
