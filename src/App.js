import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Foundations from "./pages/foundations";
import Components from "./pages/components";
import About from "./pages/about";
import ForDesigners from "./pages/designers";
import ForDevelopers from "./pages/developers";
import Sidebar from "./components/Sidebar";
import Atoms from "./pages/atoms";
import Molecules from "./pages/molecules";
import Organisms from "./pages/organisms";
import Templates from "./pages/templates";

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
          <Route path="/atoms" element={<Atoms />} />
          <Route path="/molecules" element={<Molecules />} />
          <Route path="/organisms" element={<Organisms />} />
          <Route path="/templates" element={<Templates />} />





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
