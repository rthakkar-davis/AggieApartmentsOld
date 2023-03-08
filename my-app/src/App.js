import './App.css';
import QnA from './components/js/QnA.js';
import ApartmentPage from './ApartmentPage.js';
import {colors} from './colors.js'

function App() {
  return (
    <div className="App">
      <header style={{color: colors["blue"]}} className="App-header">
        <h1>Aggie Apartments</h1>
      </header>
      <ApartmentPage />
      

    </div>
  );
}

export default App;
