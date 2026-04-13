import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import BuscarCategoria from "./components/categorias/buscarcategoria/BuscarCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-full bg-linear-to-br from-[#6ED3A3]/30 to-[#4A90E2]/30 backdrop-blur-sm">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<BuscarCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
