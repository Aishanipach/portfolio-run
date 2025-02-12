import "./App.css";
import BackgroundText from "./components/BackgroundText";
import ThreeDAsset from "./components/ThreeDAsset";

function App() {
  return (
    <div>
      <div className="main-name-wrapper">
        <p className="main-name">AISHANI PACHAURI</p>
      </div>
      <div className="main-container">
        <ThreeDAsset />
        <BackgroundText />
      </div>
      <div>
        I am a software developer, caffeinated by coffee and driven by passion.
        <br />I love to code and create new things. I have a creative side too
        :)
      </div>
    </div>
  );
}

export default App;
