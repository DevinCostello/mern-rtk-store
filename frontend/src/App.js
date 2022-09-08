import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

//Components
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Cart from "./pages/Cart";


function App() {
  return (
      <Router>
      <Header />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
          </>
        </Routes>
      </Router>
  );
}

export default App;
