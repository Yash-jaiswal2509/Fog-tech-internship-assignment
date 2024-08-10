import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/Landing_Page/Main_Content/main_content";
import Layout from "./components/Landing_Page/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public Routes */}
            <Route path="/" element={<MainContent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
