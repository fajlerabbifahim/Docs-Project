import "./App.css";
import Background from "./Components/Background/Background";
import Forground from "./Components/Fourground/Forground";

function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
        <Background />
        <Forground />
      </div>
    </>
  );
}

export default App;
