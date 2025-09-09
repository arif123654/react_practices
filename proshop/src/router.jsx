import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";
import PrivateRoute from "./components/PrivateRoute";
import PaymentPage from "./pages/PaymentPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage/>} />
        <Route path="cart" element={<CartPage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="register" element={<RegisterPage/>} />

        <Route path="" element={<PrivateRoute/>}>
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="payment" element={<PaymentPage />} />
          {/* <Route path="placeorder" element={<PlaceOrderPage />} />
          <Route path="order/:id" element={<OrderPage />} />
          <Route path="profile" element={<ProfilePage />} /> */}
        </Route>
    </Route>
  )
)

export default router