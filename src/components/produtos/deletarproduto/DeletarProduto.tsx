import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../service/Service"
import { useEffect, useState } from "react"
import type Produto from "../../../models/Produtos"
import { ToastAlerta } from "../../../util/ToastAlerta"

function DeletarProduto() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [produto, setProduto] = useState<Produto>({} as Produto);

    async function buscarProdutoPorId() {
        try {
            setIsLoading(true);
            await buscar(`/produtos/${id}`, setProduto);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarProdutoPorId();
        }
    }, [id]);

    function retornar() {
        navigate("/produtos");
    }

    async function deletarProduto() {
        try {
            setIsLoading(true);

            await deletar(`/produtos/${id}`);
            ToastAlerta("Produto deletado com sucesso!", "sucesso");

            retornar();
        } catch (error) {
            console.log(error);
            ToastAlerta("Erro ao deletar", "erro");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#EAF4FF] to-white px-4">

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md max-w-md w-full text-center">

                <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-4">
                    Confirmar exclusão
                </h2>

                <p className="text-gray-500 mb-2">
                    Você está prestes a excluir o produto:
                </p>

                <p className="font-semibold text-lg text-[#333] mb-4">
                    {produto.nome}
                </p>

                {produto.foto && (
                    <img
                        src={produto.foto}
                        alt={produto.nome}
                        className="w-full h-40 object-cover rounded-xl mb-4"
                    />
                )}

                {produto.preco && (
                    <p className="text-[#2BB673] font-bold text-lg mb-6">
                        R$ {Number(produto.preco).toFixed(2)}
                    </p>
                )}

                <div className="flex flex-col md:flex-row gap-3">

                    <button
                        onClick={() => navigate(-1)}
                        className="w-full border border-gray-300 text-gray-600 py-2 rounded-xl hover:bg-gray-100 transition"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={deletarProduto}
                        disabled={isLoading}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition hover:scale-105 disabled:opacity-50"
                    >
                        {isLoading ? "Deletando..." : "Deletar"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto