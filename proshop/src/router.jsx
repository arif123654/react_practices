import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
    </Route>
  )
)

export default router