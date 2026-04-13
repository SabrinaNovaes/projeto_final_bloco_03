import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { RiCapsuleLine, RiHome2Line, RiLayoutGridLine } from "react-icons/ri";
import { FaMapMarkerAlt, FaTeamspeak, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white flex flex-col justify-center items-center text-center body px-6 md:px-10">

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#2BB673] to-trasnparent" />
            
            <div className="w-full max-w-7xl px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                <div className="flex flex-col items-center md:items-start">
                    <Link
                        to="/"
                        className="title flex items-center gap-3 text-[#2BB673] font-bold text-xl mb-2"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-25 h-25 object-contain"
                        />
                        FarmaVida
                    </Link>

                    <p className="text-gray-500 text-sm body">
                        Cuidando da sua saúde com qualidade, confiança e praticidade.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start title">
                    <h2 className="font-semibold title text-[#333] mb-3">
                        Navegação
                    </h2>

                    <div className="flex flex-col gap-2 text-gray-500 body">
                        <Link to="/" className="hover:text-[#2BB673] transition flex items-center gap-2">
                            <RiHome2Line size={18} />
                            Home
                        </Link>
                        <Link to="/produtos" className="hover:text-[#2BB673] transition flex items-center gap-2">
                            <RiCapsuleLine size={18} />
                            Produtos
                        </Link>
                        <Link to="/categorias" className="hover:text-[#2BB673] transition flex items-center gap-2">
                            <RiLayoutGridLine size={18} />
                            Categorias
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start title">
                    <h2 className="font-semibold text-[#333] mb-3">
                        Contato
                    </h2>

                    <div className="text-gray-500 text-md flex flex-col gap-2 body">
                        <p className="flex items-center gap-2"><FaMapMarkerAlt size={20} />Rio de Janeiro - RJ</p>
                        <p className="flex items-center gap-2"><FaTeamspeak size={20} />(21) 99999-9999</p>
                        <p className="flex items-center gap-2"><FaTelegramPlane size={20} />contato@farmavida.com</p>
                    </div>
                </div>

            </div>

            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#2BB673] to-trasnparent" />

            <div className="text-center text-gray-400 text-sm py-4 px-4">
                © {new Date().getFullYear()} FarmaVida. Todos os direitos reservados.
            </div>

        </footer>
    );
}