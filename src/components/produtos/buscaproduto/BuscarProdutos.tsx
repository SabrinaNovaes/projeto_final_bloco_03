import { useEffect, useState } from "react";
import type Produto from "../../../models/Produtos";
import { buscar } from "../../../service/Service";
import CardProduto from "../cardproduto/CardProduto";

function BuscarProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    async function buscarProdutos() {
        try {
            setIsLoading(true);
            await buscar("/produtos", setProdutos);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>

            {isLoading && (
                <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#EAF4FF] to-white">
                    <div className="flex flex-col items-center gap-4">

                        <div className="w-12 h-12 border-4 border-[#2BB673] border-t-transparent rounded-full animate-spin"></div>

                        <p className="text-[#2BB673] font-medium animate-pulse">
                            Carregando...
                        </p>

                    </div>
                </div> )}

            <section className="min-h-screen px-6 md:px-10 py-10 bg-linear-to-br from-[#EAF4FF] to-white">

                <h1 className="title text-3xl md:text-4xl font-bold text-[#333] mb-8">
                    Produtos
                </h1>

                {isLoading && (
                    <p className="text-gray-500">Carregando produtos...</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {produtos.map((prod) => (
                        <CardProduto key={prod.id} produto={prod} />
                    ))}

                </div>

            </section>
        </>
    )
}

export default BuscarProdutos