import { useNavigate } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { FaEdit, FaTrash } from "react-icons/fa";

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {

    const navigate = useNavigate();

    return (
        <div className="bg-[#F5F7FA] rounded-2xl p-6 shadow-md hover:shadow-lg transition flex flex-col justify-between">

            {/* CONTEÚDO */}
            <div>
                <h2 className="title text-lg font-semibold text-[#333] mb-2">
                    {categoria.nome}
                </h2>
            </div>

            <div className="mt-6 flex gap-3">

                <button
                    onClick={() => navigate(`/editarCategoria/${categoria.id}`)}
                    className="body flex-1 flex bg-[#20925b] hover:bg-[#21bb70] text-white py-2 justify-center rounded-full transition hover:scale-105"
                >
                    <FaEdit size={22} /> Editar
                </button>

                <button
                    onClick={() => navigate(`/deletarCategoria/${categoria.id}`)}
                    className="body flex-1 flex hover:bg-red-600 py-2 justify-center rounded-full transition hover:scale-105"
                >
                    <FaTrash size={22} /> Deletar
                </button>

            </div>
        </div>
    );
}

export default CardCategoria;