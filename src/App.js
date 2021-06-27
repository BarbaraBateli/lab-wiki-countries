import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Navbar />
    <Route exact path="/" component={CountriesList}/>
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
