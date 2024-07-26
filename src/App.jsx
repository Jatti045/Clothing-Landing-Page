import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import ShopAllPage from "./pages/ShopAllPage";
import ItemPage from "./pages/ItemPage";
import ScrollToTop from "./components/ScrollToTop";
import Promo from "./components/Promo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router basename="/Clothing-Landing-Page">
      <ScrollToTop />
      <Promo />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shopAll" element={<ShopAllPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
