import "./App.css";
import Row from "./component/Row";
import requests from "./requests";
import Banner from "./component/Banner";
import Nav from "./component/Nav";

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner />

            {requests.map((types, index) => {
                return types.title === "NETFLIX ORIGINALS" ? (
                    <Row
                        key={index}
                        title={types.title}
                        fetchUrl={types.fetch}
                        isLargeRow
                    />
                ) : (
                    <Row
                        key={index}
                        title={types.title}
                        fetchUrl={types.fetch}
                    />
                );
            })}
        </div>
    );
}

export default App;
