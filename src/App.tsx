import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/Landing_Page/Main_Content/main_content";
import Layout from "./components/Landing_Page/Layout";
import MusicProvider from "./lib/MusicProvider";

function App() {
  return (
    <>
      <MusicProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}
              <Route path="/" element={<MainContent />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MusicProvider>
    </>
  );
}

export default App;
