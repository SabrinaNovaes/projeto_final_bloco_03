import { useNavigate } from "react-router-dom";
import type Produto from "../../../models/Produtos";
import { FaEdit, FaTrash } from "react-icons/fa";

interface CardProdutoProps {
    produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {

    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col justify-between hover:-translate-y-1">

            {produto.foto && (
                <img
                    src={produto.foto}
                    alt={produto.nome}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                />
            )}

            <div>
                <h2 className="text-lg font-semibold text-[#333] mb-2">
                    {produto.nome}
                </h2>

                {produto.categoria && (
                    <span className="text-xs bg-[#EAF4FF] text-[#4A90E2] px-2 py-1 rounded-md">
                        {produto.categoria.nome}
                    </span>
                )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">

                <span className="text-[#2BB673] font-bold text-lg">
                    R$ {Number(produto.preco).toFixed(2)}
                </span>

                <div className="flex gap-2">

                    <button
                        onClick={() => navigate(`/editarProduto/${produto.id}`)}
                        className=" bg-[#20925b] hover:bg-[#21bb70] text-white px-3 py-1 rounded-full transition hover:scale-105"
                    >
                        <FaEdit size={20} />
                    </button>

                    <button
                        onClick={() => navigate(`/deletarProduto/${produto.id}`)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition hover:scale-105"
                    >
                        <FaTrash size={20} />
                    </button>

                </div>
            </div>

        </div>
    );
}

export default CardProduto;