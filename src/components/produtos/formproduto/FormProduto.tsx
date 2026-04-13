import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produtos";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { ToastAlerta } from "../../../util/ToastAlerta";

function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: "" });

    const [produto, setProduto] = useState<Produto>({} as Produto);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        buscarCategorias();

        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    async function buscarProdutoPorId(id: string) {
        try {
            setIsLoading(true);
            await buscar(`/produtos/${id}`, setProduto);
        } catch (error) {
            console.log(error);
            ToastAlerta("Erro ao carregar produto", "erro");
        } finally {
            setIsLoading(false);
        }
    }

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias);
        } catch (error) {
            console.log(error);
            ToastAlerta("Categorias não encontradas", "erro");
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setProduto((prev) => ({
            ...prev,
            categoria: categoria
        }));
    }, [categoria]);

    useEffect(() => {
        if (produto.categoria) {
            setCategoria(produto.categoria);
        }
    }, [produto.id]);  // ← depende só do id, não do objeto inteiro

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/produtos");
    }

    async function gerarNovoProduto(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setIsLoading(true);

            if (id !== undefined) {
                await atualizar("/produtos", produto, setProduto);
            } else {
                await cadastrar("/produtos", produto, setProduto);
            }

            ToastAlerta("Produto salvo com sucesso!", "sucesso");
            retornar();

        } catch (error) {
            console.log(error);
            ToastAlerta("Erro ao salvar produto", "erro");
        } finally {
            setIsLoading(false);
        }
    }

    const carregandoCategoria = categoria.nome === "";

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#EAF4FF] to-white px-4">

            <form
                onSubmit={gerarNovoProduto}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-md w-full max-w-lg flex flex-col gap-4"
            >

                <h1 className="title text-2xl md:text-3xl font-bold text-[#333] text-center">
                    {id ? "Editar Produto" : "Cadastrar Produto"}
                </h1>

                <input
                    type="text"
                    name="nome"
                    placeholder="Nome do produto"
                    value={produto.nome ?? ""}
                    onChange={atualizarEstado}
                    required
                    className="body w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2BB673]"
                />

                <input
                    type="number"
                    name="preco"
                    placeholder="Preço"
                    value={produto.preco ?? ""}
                    onChange={atualizarEstado}
                    required
                    onWheel={(e) => e.currentTarget.blur()}
                    onKeyDown={(e) => ["ArrowUp", "ArrowDown"].includes(e.key) && e.preventDefault()}
                    className="body w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2BB673] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />

                <input
                    type="url"
                    name="foto"
                    placeholder="URL da imagem"
                    value={produto.foto ?? ""}
                    onChange={atualizarEstado}
                    className="body w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2BB673]"
                />

                {produto.foto && (
                    <img
                        src={produto.foto}
                        alt="Preview do produto"
                        className="body w-full h-40 object-cover rounded-xl"
                    />
                )}

                <select
                    value={categoria.id}
                    onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    required
                    className="body w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#2BB673]"
                >
                    <option value="">Selecione uma categoria</option>

                    {categorias.map((categoria) => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>

                <div className="flex flex-col md:flex-row gap-3 mt-4">

                    <button
                        type="button"
                        onClick={retornar}
                        className="body w-full border border-gray-300 text-gray-600 py-2 rounded-xl hover:bg-gray-100 transition"
                    >
                        Cancelar
                    </button>

                    <button
                        type="submit"
                        disabled={isLoading || carregandoCategoria}
                        className="body w-full bg-[#2BB673] hover:bg-[#6ED3A3] text-white py-2 rounded-xl transition hover:scale-105 disabled:opacity-50"
                    >
                        {isLoading ? "Salvando..." : "Salvar"}
                    </button>

                </div>
            </form>
        </div>
    );
}

export default FormProduto;