import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar";


const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;