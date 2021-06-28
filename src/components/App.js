import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
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
    style={{ maxHeight: '90vh', overflow: 'scroll' }}>
    </div>
    <CountriesList /> 
    </div>
    <div className="col-7">{/* <CountryDetail /> */}
    </div>
  </div>
  </div>
  </div>
  );
}

export default App;
    
   
