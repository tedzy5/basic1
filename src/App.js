import './css/App.css';
import Header from "./structure/Header";
import Home from "./pages/Home";
import Footer from "./structure/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
