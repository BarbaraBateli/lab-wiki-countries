import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import CountriesList from '../components/CountriesList';
import CountryDetails from '../components/CountryDetails';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <CountriesList />
          </div>
          <div className="col-7">
            <Route path="/:cca3" component={CountryDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
