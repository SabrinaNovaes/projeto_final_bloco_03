import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../service/Service";
import type Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../util/ToastAlerta";

function DeletarCategoria() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    async function buscarCategoriaPorId() {
        try {
            setIsLoading(true);
            await buscar(`/categorias/${id}`, setCategoria);

            ToastAlerta("Categoria carregada com sucesso!", "sucesso")
        } catch (error) {
            console.log(error);
            ToastAlerta("Erro ao carregar categoria", "erro")
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId();
        }
    }, [id]);

    function retornar() {
        navigate("/categorias");
    }

    async function deletarCategoria() {
        try {
            setIsLoading(true);

            await deletar(`/categorias/${id}`);
            ToastAlerta("Categoria deletada com sucesso!", "sucesso");

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

            <div className="bg-white p-6 rounded-2xl shadow-md max-w-md w-full text-center">

                <h2 className="title text-xl font-bold text-[#333] mb-4">
                    Confirmar exclusão
                </h2>

                <p className="text-gray-500 mb-2">
                    Categoria:
                </p>

                <p className="body font-semibold text-[#333] mb-6">
                    {categoria.nome}
                </p>

                <div className="flex justify-center gap-4">

                    <button
                        onClick={() => navigate(-1)}
                        className="body border border-gray-300 text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-100 transition"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={deletarCategoria}
                        disabled={isLoading}
                        className="body bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition hover:scale-105 disabled:opacity-50"
                    >
                        {isLoading ? "Deletando..." : "Deletar"}
                    </button>

                </div>
            </div>
        </div>
    );
}

export default DeletarCategoria;