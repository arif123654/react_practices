import './assets/css/App.css';
// import AboutPage from './pages/AboutPage';
// import HomePage from './pages/HomePage';
// import SingleComponent from './SingleComponent';
import { router } from "./router/index";
import { RouterProvider } from "react-router-dom";
import { NuqsAdapter } from "nuqs/adapters/react-router";

const App = () => {
  return (
    <NuqsAdapter>
      <RouterProvider router={router} />
    </NuqsAdapter>
  );
};

export default App;
