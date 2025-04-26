import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "../component/Landingpage";
import Signin from "../component/Signin";
import Footer from "../component/Footer";
import Signup from "../component/Signup";
import Show from "../component/Show";
import Fullview from "../component/Fullview";
import ProtectedRoutes from "./isAuth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/browse" element={<Show />}></Route>
          <Route path="/browse/fullview/:resId" element={<Fullview />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
