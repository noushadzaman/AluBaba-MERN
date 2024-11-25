import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from "./pages/Verify";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import AnimatePage from "./components/AnimatePage";

const App = () => {
  const location = useLocation();
  console.log(location);

  return (
    <main>
      <Header />
      {/* <section className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> */}

        <AnimatePresence>
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<AnimatePage><Home /></AnimatePage>} />
            <Route path="/collection" element={<AnimatePage><Collection /></AnimatePage>} />
            <Route path="/about" element={<AnimatePage><About /></AnimatePage>} />
            <Route path="/contact" element={<AnimatePage><Contact /></AnimatePage>} />
            <Route path="/product/:productId" element={<AnimatePage><Product /></AnimatePage>} />
            <Route path="/cart" element={<AnimatePage><Cart /></AnimatePage>} />
            <Route path="/login" element={<AnimatePage><Login /></AnimatePage>} />
            <Route path="/place-order" element={<AnimatePage><PlaceOrder /></AnimatePage>} />
            <Route path="/orders" element={<AnimatePage><Orders /></AnimatePage>} />
            <Route path="/verify" element={<AnimatePage><Verify /></AnimatePage>} />

          </Routes>
        </AnimatePresence>
      {/* </section> */}
      <Footer />
      {/* <ToastContainer /> */}
    </main>
  );
};

export default App;