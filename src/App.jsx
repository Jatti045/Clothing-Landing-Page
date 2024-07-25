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
    <Router>
      <ScrollToTop />
      <Promo />
      <Navbar />
      <Routes>
        <Route path="/Clothing-Landing-Page" element={<HomePage />} />
        <Route
          path="/Clothing-Landing-Page/checkout"
          element={<CheckoutPage />}
        />
        <Route
          path="/Clothing-Landing-Page/shopAll"
          element={<ShopAllPage />}
        />
        <Route path="/Clothing-Landing-Page/item/:id" element={<ItemPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
