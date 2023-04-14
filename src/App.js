import './App.css';
import Row from './component/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Making Netflix clone</h1>

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
