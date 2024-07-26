import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register/Register";
import RegisterLayout from "./components/RegisterLayout/RegisterLayout";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<RegisterLayout />}>
            <Route index path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route
            path='/'
            element={user != null ? <Layout /> : <Navigate to='login' />}
          >
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
          </Route>
        </Routes>
      </Router>
      <Toaster
        position='bottom-right'
        reverseOrder={false}
        gutter={10}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            height: "20px",
            padding: "25px",
            fontSize: "20px",
            fontWeight: "500",

            background: "#f1f1f1",
            color: "#363636",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              borderLeft: "15px solid #41B06E",
            },
            theme: {
              primary: "#41B06E",
              secondary: "black",
            },
            iconTheme: {
              primary: "#41B06E",
            },
          },
          error: {
            duration: 5000,
            style: {
              borderLeft: "15px solid #C70039",
            },
            theme: {
              primary: "#C70039",
              secondary: "black",
            },
            iconTheme: {
              primary: "#C70039",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
