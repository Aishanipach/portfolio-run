import "./App.css";
import BackgroundText from "./components/BackgroundText";
import ThreeDAsset from "./components/ThreeDAsset";

function App() {
  return (
    <div>
      <div className="main-name">AISHANI PACHAURI</div>
      <div className="main-container">
        <ThreeDAsset />
        <BackgroundText />
      </div>
    </div>
  );
}

export default App;
