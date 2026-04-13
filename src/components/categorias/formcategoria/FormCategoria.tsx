import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, cadastrar, atualizar } from "../../../service/Service";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: "",
        produto: null
    });

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId();
        }
    }, [id]);

    async function buscarCategoriaPorId() {
        try {
            setIsLoading(true);
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setIsLoading(true);

            if (id !== undefined) {
                await atualizar(`/categorias`, categoria, setCategoria);
            } else {
                await cadastrar(`/categorias`, categoria, setCategoria);
            }

            alert("Categoria salva com sucesso!");
            navigate("/categorias");

        } catch (error) {
            console.log(error);
            alert("Erro ao salvar categoria");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-lineat-to-br from-[#EAF4FF] to-white px-4">

            <form
                onSubmit={gerarNovaCategoria}
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4"
            >

                <h1 className="text-3xl font-bold text-[#333] text-center">
                    {id ? "Editar Categoria" : "Cadastrar Categoria"}
                </h1>

                <div>
                    <label className="block text-sm text-[#333] mb-1">
                        Nome
                    </label>
                    <input
                        type="text"
                        name="nome"
                        value={categoria.nome}
                        onChange={atualizarEstado}
                        required
                        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2BB673]"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#2BB673] hover:bg-[#6ED3A3] text-white py-3 rounded-xl transition hover:scale-105 disabled:opacity-50"
                >
                    {isLoading ? "Salvando..." : "Salvar"}
                </button>

            </form>
        </div>
    );
}

export default FormCategoria;