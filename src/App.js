import "./App.css";
import Introduction from "./components/introduction";
import CodeArea from "./components/codeArea";
function App() {
  return (
    <div className="App">
      <div className="HeadingContent">
        Unlock Seamless Sharing for Your Solidity Code
      </div>
      <div className="main-container">
        <Introduction />
        <CodeArea />
      </div>
    </div>
  );
}

export default App;
