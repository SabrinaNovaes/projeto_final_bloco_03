import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-full bg-linear-to-br from-[#6ED3A3]/30 to-[#4A90E2]/30 backdrop-blur-sm">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
