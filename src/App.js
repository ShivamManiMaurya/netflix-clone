import "./App.css";
import Row from "./component/Row";
import requests from "./requests";
import Banner from "./component/Banner";

function App() {
    return (
        <div className="app">
            {/* Navbar */}

            <Banner />

            {requests.map((types, index) => {
                {
                    /* console.log(types.title); */
                }
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
