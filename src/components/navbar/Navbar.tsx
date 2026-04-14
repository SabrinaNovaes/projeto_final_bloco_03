import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { RiHome2Line, RiLayoutGridLine, RiCapsuleLine, RiAddCircleLine, RiCloseLine, RiMenuLine } from "react-icons/ri";
import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md shadow-green-500/50 px-6 md:px-8 py-4 flex items-center justify-between relative">

            <Link to="/home" className="flex items-center gap-3">
                <img src={logo} alt="FarmaVida" className="h-12 w-14 md:h-18 md:w-20 object-contain" />
                <span className="title text-2xl md:text-3xl font-bold text-[#098f55] tracking-wide">
                    FarmaVida
                </span>
            </Link>

            <button
                className="md:hidden text-[#098f55]"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
            </button>

            <ul className="hidden md:flex gap-4 text-md font-medium items-center">

                <li>
                    <Link to="/home" className="flex title items-center gap-1 hover:text-green-600 transition">
                        <RiHome2Line size={18} />
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/categorias" className="flex title items-center gap-1 hover:text-green-600 transition">
                        <RiLayoutGridLine size={18} />
                        Categorias
                    </Link>
                </li>

                <li>
                    <Link to="/produtos" className="flex title items-center gap-1 hover:text-green-600 transition">
                        <RiCapsuleLine size={18} />
                        Produtos
                    </Link>
                </li>

                <li>
                    <Link
                        to="/cadastrarCategoria"
                        className="flex title items-center gap-1 bg-[#20925b] hover:bg-[#21bb70] text-white px-5 py-2 rounded-xl transition hover:scale-105"
                    >
                        <RiAddCircleLine size={18} />
                        Nova Categoria
                    </Link>
                </li>

                <li>
                    <Link
                        to="/cadastrarProduto"
                        className="flex title items-center gap-1 bg-[#20925b] hover:bg-[#21bb70] text-white px-5 py-2 rounded-xl transition hover:scale-105"
                    >
                        <RiAddCircleLine size={18} />
                        Novo Produto
                    </Link>
                </li>

            </ul>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">

                    <Link to="/home" onClick={() => setMenuOpen(false)} className="flex title items-center gap-2 hover:text-green-800">
                        <RiHome2Line size={20} />
                        Home
                    </Link>

                    <Link to="/categorias" onClick={() => setMenuOpen(false)} className="flex title items-center gap-2 hover:text-green-800">
                        <RiLayoutGridLine size={20} />
                        Categorias
                    </Link>

                    <Link to="/produtos" onClick={() => setMenuOpen(false)} className="flex title items-center gap-2 hover:text-green-800">
                        <RiCapsuleLine size={20} />
                        Produtos
                    </Link>

                    <Link
                        to="/cadastrarCategoria"
                        onClick={() => setMenuOpen(false)}
                        className="flex title items-center gap-2 bg-[#20925b] text-white px-5 py-2 rounded-xl"
                    >
                        <RiAddCircleLine size={20} />
                        Nova Categoria
                    </Link>

                    <Link
                        to="/cadastrarProduto"
                        onClick={() => setMenuOpen(false)}
                        className="flex title items-center gap-2 bg-[#20925b] text-white px-5 py-2 rounded-xl"
                    >
                        <RiAddCircleLine size={20} />
                        Novo Produto
                    </Link>

                </div>
            )}

        </nav>
    );
}

export default Navbar