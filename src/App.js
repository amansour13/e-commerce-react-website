import './App.css';
import Home from "./Pages/Home";
import DetailedProduct from './Pages/DetailedProduct';
import AddProduct from './Pages/AddProduct';
import ErrorPage from './Pages/ErrorPage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailedProduct />} />
          <Route path="/Add-Product" element={<AddProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
