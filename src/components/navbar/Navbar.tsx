import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { RiHome2Line, RiLayoutGridLine, RiCapsuleLine, RiAddCircleLine } from "react-icons/ri";

function Navbar() {
    return (
        <nav className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
            <Link to="/home" className="flex items-center gap-3">
                <img src={logo} alt="FarmaVida" className="h-18 w-20 object-contain" />
                <span className="title text-3xl font-bold text-[#098f55] tracking-wide">FarmaVida</span>
            </Link>

            <ul className="flex gap-8 text-sm font-medium items-center">
                <li>
                    <Link to="/home" className="flex items-center gap-1 hover:text-green-800 transition">
                        <RiHome2Line size={18} />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/categorias" className="flex items-center gap-1 hover:text-green-800 transition">
                        <RiLayoutGridLine size={18} />
                        Categorias
                    </Link>
                </li>
                <li>
                    <Link to="/produtos" className="flex items-center gap-1 hover:text-green-800  transition">
                        <RiCapsuleLine size={18} />
                        Produtos
                    </Link>
                </li>
                <li>
                    <Link
                        to="/cadastrarCategoria"
                        className="flex items-center gap-1 bg-[#20925b] hover:bg-[#21bb70] text-white px-5 py-2 rounded-xl transition hover:scale-105"
                    >
                        <RiAddCircleLine size={18} />
                        Nova Categoria
                    </Link>
                </li>
                <li>
                    <Link
                        to="/cadastrarProduto"
                        className="flex items-center gap-1 bg-[#20925b] hover:bg-[#21bb70] text-white px-5 py-2 rounded-xl transition hover:scale-105"
                    >
                        <RiAddCircleLine size={18} />
                        Novo Produto
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;