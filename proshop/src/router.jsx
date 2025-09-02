import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage/>} />
    </Route>
  )
)

export default router