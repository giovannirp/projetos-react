import "./App.scss";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contato from "./Pages/Contato";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route  path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
