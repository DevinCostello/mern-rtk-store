import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//Components
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <Header />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
