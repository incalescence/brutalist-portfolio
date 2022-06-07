import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

// disables right click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// generates a random background colour
const randomhex = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
document.body.style.background = randomhex;

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
