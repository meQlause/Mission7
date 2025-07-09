import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { HomePage } from "./pages/home";
import { ProductsPage } from "./pages/products";
import { ProductsDetailsPage } from "./pages/produtcsDetails";
import { ScrollToTop } from "./services/scrollToTop";
import { paymenMethodPage } from "./pages/paymentMethod";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="*" Component={HomePage}></Route>
        <Route path="/login" Component={LoginPage}></Route>
        <Route path="/register" Component={RegisterPage}></Route>
        <Route path="/products" Component={ProductsPage}></Route>
        <Route path="/product-details/:id" Component={ProductsDetailsPage}></Route>
        <Route path="/select-payment-method/:id" Component={paymenMethodPage}></Route>
      </Routes>
    </Router>
  );
};
