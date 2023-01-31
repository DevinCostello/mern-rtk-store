import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useDispatch } from "react-redux";

//Components
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";
import Login from './pages/Login'
import Products from "./pages/Products";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import User from "./pages/User";

import SharedProductLayout from "./pages/SharedProductLayout";
import { useGetUserQuery } from './features/api/apiSlice'


function App() {

  const {data: user, isLoading, isSuccess, error} = useGetUserQuery()
  const dispatch = useDispatch()


  return (
      <Router>
      <Header user={user} />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<div>Error: 404</div>}/>

            {/* redirect to home page, login page if no token */}
            <Route path="/me" element={<User />} />            

            <Route path="/products" element={<SharedProductLayout />}  >
              <Route index element={<Products />}   />
              <Route path=":id" element={<Details />} />
            </Route>

              {/* redirect to home page, login page if no token */}
            <Route path="/cart" element={<Cart />} />
          </>
        </Routes>
      </Router>
  );
}

export default App;
