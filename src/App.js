import logo from "./logo.svg";
import "./index.css";
import Banner from "./stories/Banner";

function App() {
  return (
    <div className="App">
      <Banner variant="info">
        <p>
          {" "}
          This is an example of an info banner to display important information.{" "}
        </p>
      </Banner>
    </div>
  );
}

export default App;
