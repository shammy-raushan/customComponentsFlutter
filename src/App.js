import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Foundations from "./pages/foundations";
import Components from "./pages/components";
import About from "./pages/about";
import ForDesigners from "./pages/designers";
import ForDevelopers from "./pages/developers";
import Sidebar from "./components/Sidebar";
import Accordion from "./pages/atoms";
import Appbar from "./pages/molecules";
import Chip from "./pages/organisms";
import Card from "./pages/templates";

function App() {
  return (

    <>


      <Layout>
        <Sidebar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/foundations" element={<Foundations />} />
          <Route path="/components" element={<Components />} />

          <Route path="/about" element={<About />} />
          <Route path="/for-designers" element={<ForDesigners />} />

          <Route path="/for-developers" element={<ForDevelopers />} />
          {/* sidebar routes */}
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/appbar" element={<Appbar />} />
          <Route path="/chip" element={<Chip />} />
          <Route path="/card" element={<Card />} />





        </Routes>
      </Layout>
      {/* <Layout>

        <Sidebar />
        <Routes>
          <Route path="/css" element={<Css />} />
          <Route path="/java" element={<Java />} />

        </Routes>
      </Layout> */}
    </>
  );
}

export default App;
