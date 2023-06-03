import "./App.scss";
import Btn from "./components/button/button";
import Intro from "./components/intro/introduce";
import Pro from "./components/projects/pro";

function App() {
  return (
    <div className="AppConteiner">
      <Intro />
      <Btn />
      <Pro />
    </div>
  );
}

export default App;
