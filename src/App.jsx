import "./App.css";
import Buttons from "./Components/Buttons";
import Header from "./Components/Header";

function App() {
  return (
    <div className="container mx-auto p-10 w-[95vw]">
      <div className="md:columns-2">
        <h1 className="w-[30%] align-middle">
          <Header />
        </h1>
        <div className="w-[160%] text-center my-[20px] ml-[-60%]">
          <Buttons />
        </div>
        <h1 className="copyRight">
          <span>Made with 💖 By Vishnu Kumar Verma</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
