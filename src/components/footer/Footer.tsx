import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export default function Footer() {
    return (
        <footer className="bg-white mt-10 shadow-inner justify-center items-center text-center body">

            <div className="h-0.5 w-full bg-linear-to-r from-[#2BB673] to-[#47ff9a]" />

            <div className="px-8 py-10 grid md:grid-cols-3 gap-8">

                <div>
                    <Link
                        to="/"
                        className="flex items-center gap-3 text-[#2BB673] font-bold text-xl mb-4"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-10 h-10 object-contain"
                        />
                        FarmaVida
                    </Link>

                    <p className="text-gray-500 text-sm">
                        Cuidando da sua saúde com qualidade, confiança e praticidade.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-[#333] mb-3">
                        Navegação
                    </h2>

                    <div className="flex flex-col gap-2 text-gray-500">
                        <Link to="/" className="hover:text-[#2BB673] transition">
                            Home
                        </Link>
                        <Link to="/produtos" className="hover:text-[#2BB673] transition">
                            Produtos
                        </Link>
                        <Link to="/categorias" className="hover:text-[#2BB673] transition">
                            Categorias
                        </Link>
                    </div>
                </div>

                <div>
                    <h2 className="font-semibold text-[#333] mb-3">
                        Contato
                    </h2>

                    <div className="text-gray-500 text-sm flex flex-col gap-2">
                        <p>📍 Rio de Janeiro - RJ</p>
                        <p>📞 (21) 99999-9999</p>
                        <p>✉️ contato@farmavida.com</p>
                    </div>
                </div>
            </div>

            <div className="h-0.5 w-full bg-linear-to-r from-[#2BB673] to-[#47ff9a]" />

            <div className="text-center text-gray-400 text-sm py-4">
                © {new Date().getFullYear()} FarmaVida. Todos os direitos reservados.
            </div>
        </footer>
    );
}