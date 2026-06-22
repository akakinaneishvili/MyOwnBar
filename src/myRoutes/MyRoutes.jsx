import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cocktails from "../pages/Cocktails";
import Contactus from "../pages/Contactus";
import Ourstory from "../pages/Ourstory";
import Layout from "../layout/Layout";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="Cocktails" element={<Cocktails />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="Ourstory" element={<Ourstory />} />
        </Route>
      </Routes>
    </>
  );
}
export default MyRoutes;
